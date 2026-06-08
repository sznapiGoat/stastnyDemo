import { ImageResponse } from 'next/og'

export const alt = 'Autoškola Šťastný Humpolec – řidičský průkaz skupiny B'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'linear-gradient(135deg, #0f1b30 0%, #1a2c4e 60%, #22386180 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            color: '#f5a623',
            fontSize: 30,
            letterSpacing: 6,
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Humpolec · Skupina B
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            Autoškola Šťastný
          </div>
          <div
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: 40,
              marginTop: 24,
              maxWidth: 900,
            }}
          >
            Řidičský průkaz skupiny B s individuálním přístupem.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            color: '#ffffff',
            fontSize: 34,
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: '#f5a623',
              display: 'flex',
            }}
          />
          stastnyautoskola.cz
        </div>
      </div>
    ),
    { ...size }
  )
}
