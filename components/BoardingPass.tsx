function InkBarcode({
  bars,
  className,
}: {
  bars: number[];
  className?: string;
}) {
  const width = bars.reduce((sum, bar) => sum + bar + 1.1, 0);
  let x = 0;
  return (
    <svg
      viewBox={`0 0 ${width} 18`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      {bars.map((bar, index) => {
        const rect = (
          <rect
            key={index}
            x={x}
            y="0"
            width={bar}
            height="18"
            fill="currentColor"
          />
        );
        x += bar + 1.1;
        return rect;
      })}
    </svg>
  );
}

function PlaneMark() {
  return (
    <svg
      viewBox="0 0 28 10"
      width="28"
      height="10"
      fill="none"
      aria-hidden="true"
      className="historia-pass-plane"
    >
      <path
        d="M1.2 5.1 H18.4 M14.2 2.1 L19.6 5.1 L14.2 8.1"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 5.1 L5.4 1.4 M8.2 5.1 L5.6 8.7 M19.8 5.1 H26.4"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BoardingPass({
  fromCode,
  fromCity,
  toCode,
  toCity,
  passenger,
  flight,
  valid,
}: {
  fromCode: string;
  fromCity: string;
  toCode: string;
  toCity: string;
  passenger: string;
  flight: string;
  valid: string;
}) {
  return (
    <figure
      className="historia-pass"
      aria-label={`Pase de abordaje de ${fromCity} a ${toCity}, válido ${valid}`}
    >
      <div className="historia-pass-main">
        <p className="historia-pass-kicker">pase de abordaje · ida</p>
        <p className="historia-pass-name">{passenger}</p>
        <div className="historia-pass-route">
          <span className="historia-pass-code">{fromCode}</span>
          <PlaneMark />
          <span className="historia-pass-code">{toCode}</span>
        </div>
        <p className="historia-pass-cities">
          <span>{fromCity}</span>
          <span>{toCity}</span>
        </p>
        <div className="historia-pass-meta">
          <p>
            <span>vuelo</span>
            {flight}
          </p>
          <p>
            <span>válido</span>
            {valid}
          </p>
        </div>
        <InkBarcode
          className="historia-pass-bars"
          bars={[1.1, 2.4, 1.1, 1.1, 3.2, 1.1, 2.2, 1.1, 1.1, 2.8, 1.1, 1.6, 3, 1.1, 2.2, 1.1]}
        />
      </div>
      <span className="historia-pass-cut" aria-hidden="true" />
      <div className="historia-pass-stub">
        <p className="historia-pass-stub-code">{toCode}</p>
        <p className="historia-pass-stub-valid">{valid}</p>
        <InkBarcode
          className="historia-pass-bars historia-pass-bars-stub"
          bars={[1.1, 2.6, 1.1, 1.2, 2.8, 1.1]}
        />
      </div>
    </figure>
  );
}
