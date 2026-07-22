const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend'

const BodySchema = z.object({
  name: z.string().min(1).max(100),
  company: z.string().min(1).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(1).max(20),
  country: z.string().min(1).max(100),
  objective: z.string().min(1).max(200),
  message: z.string().max(1000).optional().default(''),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY is not configured')

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY is not configured')

    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const { name, company, email, phone, message } = parsed.data

    const htmlBody = `
      <h2>Nouvelle demande pilote WAFY</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold">Nom</td><td style="padding:8px">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Promoteur</td><td style="padding:8px">${escapeHtml(company)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold">Téléphone</td><td style="padding:8px">${escapeHtml(phone)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Message</td><td style="padding:8px">${escapeHtml(message || '—')}</td></tr>
      </table>
    `

    // Push to Monday (non-blocking failure)
    try {
      const MONDAY_API_TOKEN = Deno.env.get('MONDAY_API_TOKEN')
      if (MONDAY_API_TOKEN) {
        const phoneDigits = Number(phone.replace(/\D/g, '')) || 0
        const columnValues = {
          text_mm37st80: name,
          numeric_mm3762q1: phoneDigits,
          text_mm37ctzv: email,
          text_mm37gq6m: message || '',
        }
        const mondayQuery = `mutation ($board: ID!, $item: String!, $cols: JSON!) { create_item(board_id: $board, item_name: $item, column_values: $cols) { id } }`
        const mondayRes = await fetch('https://api.monday.com/v2', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': MONDAY_API_TOKEN, 'API-Version': '2023-10' },
          body: JSON.stringify({
            query: mondayQuery,
            variables: { board: '5096175875', item: company, cols: JSON.stringify(columnValues) },
          }),
        })
        const mondayData = await mondayRes.json()
        if (!mondayRes.ok || mondayData.errors) {
          console.error('Monday API error:', JSON.stringify(mondayData))
        }
      }
    } catch (mondayErr) {
      console.error('Monday push failed:', mondayErr)
    }

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: 'WAFY PRO <hello@wafypro.ma>',
        to: ['hello@wafypro.ma'],
        reply_to: email,
        subject: `Nouvelle demande pilote – ${company}`,
        html: htmlBody,
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(`Resend API error [${response.status}]: ${JSON.stringify(data)}`)
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error: unknown) {
    console.error('Error sending contact email:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
