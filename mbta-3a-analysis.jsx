import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter, CartesianGrid, Legend, LineChart, Line, Area, AreaChart, ComposedChart } from "recharts";

const DATA = [{"n":"Abington","c":"Commuter Rail","h":6811,"r":1022},{"n":"Acton","c":"Commuter Rail","h":9219,"r":1383},{"n":"Amesbury","c":"Adjacent community","h":7889,"r":789},{"n":"Andover","c":"Commuter Rail","h":13541,"r":2031},{"n":"Arlington","c":"Adjacent community","h":20461,"r":2046},{"n":"Ashland","c":"Commuter Rail","h":7396,"r":1109},{"n":"Attleboro","c":"Commuter Rail","h":18771,"r":2816},{"n":"Auburn","c":"Adjacent community","h":7224,"r":750},{"n":"Avon","c":"Adjacent community","h":1866,"r":750},{"n":"Ayer","c":"Commuter Rail","h":3557,"r":750},{"n":"Bedford","c":"Adjacent community","h":5788,"r":750},{"n":"Bellingham","c":"Adjacent community","h":6729,"r":673},{"n":"Belmont","c":"Adjacent community","h":10194,"r":1019},{"n":"Beverly","c":"Commuter Rail","h":17064,"r":2560},{"n":"Billerica","c":"Adjacent community","h":14961,"r":1496},{"n":"Bolton","c":"Adjacent small town","h":2064,"r":375},{"n":"Boxborough","c":"Adjacent small town","h":2249,"r":375},{"n":"Boxford","c":"Adjacent small town","h":3108,"r":375},{"n":"Braintree","c":"Commuter Rail","h":14906,"r":2236},{"n":"Bridgewater","c":"Commuter Rail","h":9076,"r":1361},{"n":"Brockton","c":"Commuter Rail","h":37304,"r":5596},{"n":"Brookline","c":"Rapid Transit","h":27961,"r":6990},{"n":"Burlington","c":"Adjacent community","h":10101,"r":1010},{"n":"Cambridge","c":"Rapid Transit","h":53907,"r":13477},{"n":"Canton","c":"Commuter Rail","h":9349,"r":1402},{"n":"Carlisle","c":"Adjacent small town","h":1910,"r":375},{"n":"Carver","c":"Adjacent small town","h":5030,"r":375},{"n":"Cohasset","c":"Commuter Rail","h":3238,"r":750},{"n":"Concord","c":"Commuter Rail","h":7262,"r":1089},{"n":"Danvers","c":"Adjacent community","h":11586,"r":1159},{"n":"Dedham","c":"Commuter Rail","h":10427,"r":1564},{"n":"Dover","c":"Adjacent small town","h":2092,"r":375},{"n":"Duxbury","c":"Commuter Rail","h":6478,"r":972},{"n":"East Bridgewater","c":"Adjacent community","h":5169,"r":517},{"n":"Easton","c":"Adjacent community","h":9044,"r":904},{"n":"Essex","c":"Adjacent small town","h":1654,"r":375},{"n":"Everett","c":"Rapid Transit","h":18208,"r":4552},{"n":"Fall River","c":"Commuter Rail","h":44346,"r":6652},{"n":"Fitchburg","c":"Commuter Rail","h":18019,"r":2703},{"n":"Foxborough","c":"Commuter Rail","h":7093,"r":1064},{"n":"Framingham","c":"Commuter Rail","h":30620,"r":4593},{"n":"Franklin","c":"Commuter Rail","h":12818,"r":1923},{"n":"Georgetown","c":"Commuter Rail","h":3371,"r":750},{"n":"Gloucester","c":"Commuter Rail","h":13879,"r":2082},{"n":"Grafton","c":"Adjacent community","h":7494,"r":750},{"n":"Groveland","c":"Adjacent small town","h":2781,"r":375},{"n":"Halifax","c":"Adjacent small town","h":3210,"r":375},{"n":"Hamilton","c":"Commuter Rail","h":3021,"r":750},{"n":"Hanover","c":"Adjacent community","h":5514,"r":551},{"n":"Hanson","c":"Adjacent community","h":4027,"r":403},{"n":"Haverhill","c":"Commuter Rail","h":27502,"r":4125},{"n":"Hingham","c":"Commuter Rail","h":9006,"r":1351},{"n":"Holbrook","c":"Adjacent community","h":4311,"r":431},{"n":"Holden","c":"Adjacent community","h":7308,"r":750},{"n":"Holliston","c":"Adjacent community","h":5465,"r":547},{"n":"Hopkinton","c":"Adjacent community","h":6393,"r":639},{"n":"Hudson","c":"Adjacent community","h":8411,"r":841},{"n":"Hull","c":"Adjacent community","h":5259,"r":526},{"n":"Ipswich","c":"Commuter Rail","h":6199,"r":930},{"n":"Kingston","c":"Commuter Rail","h":5373,"r":806},{"n":"Lakeville","c":"Adjacent small town","h":4557,"r":375},{"n":"Lancaster","c":"Adjacent small town","h":2720,"r":375},{"n":"Lawrence","c":"Commuter Rail","h":27092,"r":4064},{"n":"Leicester","c":"Adjacent community","h":4545,"r":455},{"n":"Leominster","c":"Commuter Rail","h":17741,"r":2661},{"n":"Lexington","c":"Adjacent community","h":12263,"r":1226},{"n":"Lincoln","c":"Commuter Rail","h":2338,"r":750},{"n":"Littleton","c":"Commuter Rail","h":3710,"r":750},{"n":"Lowell","c":"Commuter Rail","h":43482,"r":6522},{"n":"Lunenburg","c":"Adjacent community","h":4453,"r":445},{"n":"Lynn","c":"Commuter Rail","h":36782,"r":5517},{"n":"Lynnfield","c":"Adjacent community","h":5127,"r":513},{"n":"Malden","c":"Rapid Transit","h":27721,"r":6930},{"n":"Manchester-by-the-Sea","c":"Commuter Rail","h":2498,"r":750},{"n":"Mansfield","c":"Commuter Rail","h":9369,"r":1405},{"n":"Marblehead","c":"Adjacent community","h":8965,"r":897},{"n":"Marlborough","c":"Adjacent community","h":17157,"r":1716},{"n":"Marshfield","c":"Adjacent community","h":10776,"r":1078},{"n":"Maynard","c":"Adjacent community","h":4702,"r":470},{"n":"Medfield","c":"Adjacent small town","h":4510,"r":375},{"n":"Medford","c":"Rapid Transit","h":25770,"r":6443},{"n":"Medway","c":"Adjacent community","h":5084,"r":508},{"n":"Melrose","c":"Commuter Rail","h":11770,"r":1766},{"n":"Merrimac","c":"Adjacent small town","h":2720,"r":375},{"n":"Methuen","c":"Adjacent community","h":19426,"r":1943},{"n":"Middleborough","c":"Commuter Rail","h":10239,"r":1536},{"n":"Middleton","c":"Adjacent community","h":3700,"r":370},{"n":"Milford","c":"Adjacent community","h":11620,"r":1162},{"n":"Millis","c":"Adjacent small town","h":3191,"r":375},{"n":"Millville","c":"Adjacent small town","h":1389,"r":375},{"n":"Milton","c":"Commuter Rail","h":10236,"r":1535},{"n":"Nahant","c":"Adjacent small town","h":1826,"r":375},{"n":"Natick","c":"Commuter Rail","h":15018,"r":2253},{"n":"Needham","c":"Commuter Rail","h":11704,"r":1756},{"n":"New Bedford","c":"Commuter Rail","h":44588,"r":6688},{"n":"Newburyport","c":"Commuter Rail","h":8423,"r":1264},{"n":"Norfolk","c":"Commuter Rail","h":4176,"r":750},{"n":"North Andover","c":"Adjacent community","h":12090,"r":1209},{"n":"North Attleborough","c":"Adjacent community","h":12028,"r":1203},{"n":"Northborough","c":"Adjacent community","h":5987,"r":599},{"n":"Norwell","c":"Adjacent community","h":3770,"r":377},{"n":"Norwood","c":"Commuter Rail","h":11909,"r":1786},{"n":"Pembroke","c":"Adjacent community","h":6929,"r":693},{"n":"Peabody","c":"Adjacent community","h":22289,"r":2229},{"n":"Plymouth","c":"Commuter Rail","h":24754,"r":3713},{"n":"Plympton","c":"Adjacent small town","h":1097,"r":375},{"n":"Quincy","c":"Rapid Transit","h":47009,"r":11752},{"n":"Randolph","c":"Adjacent community","h":13122,"r":1312},{"n":"Raynham","c":"Adjacent community","h":5586,"r":559},{"n":"Reading","c":"Commuter Rail","h":10228,"r":1534},{"n":"Revere","c":"Rapid Transit","h":24539,"r":6135},{"n":"Rochester","c":"Adjacent small town","h":2105,"r":375},{"n":"Rockland","c":"Commuter Rail","h":7288,"r":1093},{"n":"Rockport","c":"Commuter Rail","h":4193,"r":750},{"n":"Rowley","c":"Commuter Rail","h":2500,"r":750},{"n":"Salem","c":"Commuter Rail","h":20178,"r":3027},{"n":"Salisbury","c":"Adjacent small town","h":4838,"r":375},{"n":"Saugus","c":"Adjacent community","h":11154,"r":1115},{"n":"Scituate","c":"Commuter Rail","h":7614,"r":1142},{"n":"Sharon","c":"Commuter Rail","h":6759,"r":1014},{"n":"Sherborn","c":"Adjacent small town","h":1490,"r":375},{"n":"Shirley","c":"Adjacent small town","h":2544,"r":375},{"n":"Shrewsbury","c":"Adjacent community","h":14376,"r":1438},{"n":"Somerset","c":"Adjacent community","h":7827,"r":783},{"n":"Somerville","c":"Rapid Transit","h":36269,"r":9067},{"n":"Southborough","c":"Adjacent community","h":3793,"r":379},{"n":"Spencer","c":"Adjacent small town","h":4916,"r":375},{"n":"Sterling","c":"Adjacent small town","h":3192,"r":375},{"n":"Stoneham","c":"Adjacent community","h":9706,"r":971},{"n":"Stoughton","c":"Commuter Rail","h":11359,"r":1704},{"n":"Stow","c":"Adjacent small town","h":2571,"r":375},{"n":"Sudbury","c":"Adjacent community","h":6284,"r":628},{"n":"Swampscott","c":"Adjacent community","h":6123,"r":612},{"n":"Swansea","c":"Adjacent community","h":6756,"r":676},{"n":"Taunton","c":"Commuter Rail","h":24424,"r":3664},{"n":"Tewksbury","c":"Adjacent community","h":11397,"r":1140},{"n":"Topsfield","c":"Adjacent small town","h":2474,"r":375},{"n":"Tyngsborough","c":"Adjacent community","h":4640,"r":464},{"n":"Upton","c":"Adjacent small town","h":3165,"r":375},{"n":"Wakefield","c":"Commuter Rail","h":11162,"r":1674},{"n":"Walpole","c":"Commuter Rail","h":9503,"r":1425},{"n":"Waltham","c":"Commuter Rail","h":26843,"r":4026},{"n":"Wareham","c":"Adjacent community","h":10901,"r":1090},{"n":"Watertown","c":"Adjacent community","h":16252,"r":1625},{"n":"Wayland","c":"Adjacent community","h":5244,"r":524},{"n":"Wellesley","c":"Commuter Rail","h":9364,"r":1405},{"n":"Wenham","c":"Adjacent community","h":1373,"r":375},{"n":"West Bridgewater","c":"Adjacent community","h":2834,"r":375},{"n":"West Newbury","c":"Adjacent small town","h":1719,"r":375},{"n":"Westborough","c":"Adjacent community","h":7671,"r":767},{"n":"Westford","c":"Adjacent community","h":8264,"r":826},{"n":"Weston","c":"Adjacent small town","h":3756,"r":375},{"n":"Westwood","c":"Adjacent community","h":5682,"r":568},{"n":"Weymouth","c":"Commuter Rail","h":24078,"r":3612},{"n":"Whitman","c":"Commuter Rail","h":5912,"r":887},{"n":"Wilmington","c":"Commuter Rail","h":7900,"r":1185},{"n":"Winchester","c":"Commuter Rail","h":8187,"r":1228},{"n":"Winthrop","c":"Adjacent community","h":8326,"r":833},{"n":"Woburn","c":"Commuter Rail","h":16215,"r":2432},{"n":"Worcester","c":"Commuter Rail","h":84281,"r":12642},{"n":"Wrentham","c":"Commuter Rail","h":4451,"r":750}];

const COLORS = {
  "Rapid Transit": "#dc2626",
  "Commuter Rail": "#2563eb",
  "Adjacent community": "#7c3aed",
  "Adjacent small town": "#059669"
};

const PCT_MAP = { "Rapid Transit": 25, "Commuter Rail": 15, "Adjacent community": 10, "Adjacent small town": 5 };

const formatNum = (n) => n?.toLocaleString() ?? "—";
const formatMoney = (n) => `$${(n/1e9).toFixed(2)}B`;

// Brensley cost model assumptions
const COST_PSF = 250;
const GROSS_UNIT_SF = 900;
const AVG_UNITS_PER_PROJECT = 80;
const DESIGNER_FEE_PCT = 0.059;

function computeCosts(requiredUnits) {
  const totalSF = requiredUnits * GROSS_UNIT_SF;
  const totalConstructionCost = totalSF * COST_PSF;
  const numProjects = Math.ceil(requiredUnits / AVG_UNITS_PER_PROJECT);
  const designerFees = totalConstructionCost * DESIGNER_FEE_PCT;
  return { totalConstructionCost, numProjects, designerFees };
}

const totalRequired = DATA.reduce((s, d) => s + d.r, 0);
const totalHousing = DATA.reduce((s, d) => s + d.h, 0);
const totalCosts = computeCosts(totalRequired);

const catSummary = Object.entries(
  DATA.reduce((acc, d) => {
    if (!acc[d.c]) acc[d.c] = { count: 0, units: 0, required: 0 };
    acc[d.c].count++;
    acc[d.c].units += d.h;
    acc[d.c].required += d.r;
    return acc;
  }, {})
).map(([cat, v]) => ({ category: cat, ...v, pct: PCT_MAP[cat] })).sort((a,b) => b.pct - a.pct);

const TABS = ["Overview", "Facts vs Intent", "Cost Analysis", "Community Data", "Cui Bono", "Money Trail", "The Question"];

function StatCard({ label, value, sub, accent }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderLeft: `3px solid ${accent || "#f59e0b"}`,
      padding: "16px 20px",
      borderRadius: "2px",
    }}>
      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#94a3b8", marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 700, color: "#f8fafc", fontFamily: "'JetBrains Mono', monospace" }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

function SectionHead({ num, title, subtitle }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
        <span style={{ fontSize: 11, color: "#f59e0b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em" }}>{num}</span>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#f8fafc", margin: 0, fontFamily: "'Playfair Display', Georgia, serif" }}>{title}</h2>
      </div>
      {subtitle && <p style={{ fontSize: 13, color: "#64748b", margin: 0, paddingLeft: 40 }}>{subtitle}</p>}
    </div>
  );
}

function QuoteBlock({ text, source, color }) {
  return (
    <div style={{
      borderLeft: `3px solid ${color || "#f59e0b"}`,
      padding: "12px 20px",
      margin: "12px 0",
      background: "rgba(255,255,255,0.02)",
    }}>
      <p style={{ fontSize: 14, color: "#cbd5e1", margin: 0, fontStyle: "italic", lineHeight: 1.6 }}>{text}</p>
      {source && <p style={{ fontSize: 11, color: "#64748b", margin: "8px 0 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>— {source}</p>}
    </div>
  );
}

function TensionRow({ fact, intent, verdict }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16,
      padding: "16px 0",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div>
        <div style={{ fontSize: 10, textTransform: "uppercase", color: "#22c55e", letterSpacing: "0.1em", marginBottom: 6 }}>What the Law Says</div>
        <div style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.5 }}>{fact}</div>
      </div>
      <div>
        <div style={{ fontSize: 10, textTransform: "uppercase", color: "#3b82f6", letterSpacing: "0.1em", marginBottom: 6 }}>How It's Sold</div>
        <div style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.5 }}>{intent}</div>
      </div>
      <div>
        <div style={{ fontSize: 10, textTransform: "uppercase", color: "#f59e0b", letterSpacing: "0.1em", marginBottom: 6 }}>The Gap</div>
        <div style={{ fontSize: 13, color: "#fbbf24", lineHeight: 1.5 }}>{verdict}</div>
      </div>
    </div>
  );
}

export default function MBTADashboard() {
  const [tab, setTab] = useState("Overview");
  const [search, setSearch] = useState("");
  const [sortCol, setSortCol] = useState("r");
  const [sortDir, setSortDir] = useState(-1);
  const [activeSection, setActiveSection] = useState("guns");
  const [expandedGun, setExpandedGun] = useState(null);
  const [devFilter, setDevFilter] = useState("all");
  const [webStep, setWebStep] = useState(0);
  const [expandedLobby, setExpandedLobby] = useState(null);

  const filtered = useMemo(() => {
    let d = [...DATA];
    if (search) d = d.filter(x => x.n.toLowerCase().includes(search.toLowerCase()));
    d.sort((a, b) => (a[sortCol] > b[sortCol] ? 1 : -1) * sortDir);
    return d;
  }, [search, sortCol, sortDir]);

  const top20 = useMemo(() => [...DATA].sort((a,b) => b.r - a.r).slice(0, 20), []);

  const scatterData = DATA.map(d => ({
    name: d.n,
    housingUnits: d.h,
    requiredCapacity: d.r,
    category: d.c,
    pct: (d.r / d.h * 100).toFixed(1)
  }));

  const affordabilityTimeline = [
    { year: 2000, medianPrice: 185000, medianIncome: 50502, ratio: 3.7 },
    { year: 2005, medianPrice: 350000, medianIncome: 56592, ratio: 6.2 },
    { year: 2010, medianPrice: 315000, medianIncome: 62859, ratio: 5.0 },
    { year: 2015, medianPrice: 355000, medianIncome: 70628, ratio: 5.0 },
    { year: 2020, medianPrice: 480000, medianIncome: 84385, ratio: 5.7 },
    { year: 2024, medianPrice: 575000, medianIncome: 96000, ratio: 6.0 },
    { year: 2025, medianPrice: 620000, medianIncome: 98000, ratio: 6.3 },
  ];

  const permitData = [
    { year: "2018", permits: 18200 },
    { year: "2019", permits: 17800 },
    { year: "2020", permits: 15600 },
    { year: "2021", permits: 22100 },
    { year: "2022", permits: 19400 },
    { year: "2023", permits: 15900 },
    { year: "2024", permits: 13200 },
    { year: "2025*", permits: 12400 },
  ];

  const handleSort = (col) => {
    if (sortCol === col) setSortDir(d => d * -1);
    else { setSortCol(col); setSortDir(-1); }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0e17",
      color: "#e2e8f0",
      fontFamily: "'Inter', -apple-system, sans-serif",
      padding: 0,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #0a0e17; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; }
        .recharts-tooltip-wrapper { z-index: 1000 !important; }
      `}</style>

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1a0a2e 50%, #0f172a 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 40px 24px",
      }}>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", color: "#f59e0b", marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>
          Socratic Analysis
        </div>
        <h1 style={{
          fontSize: 32,
          fontWeight: 900,
          color: "#f8fafc",
          margin: "0 0 6px",
          fontFamily: "'Playfair Display', Georgia, serif",
          lineHeight: 1.1,
        }}>
          MBTA Communities Act — Facts vs. Intent
        </h1>
        <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>
          MGL c. 40A § 3A · Brensley Cost Impact Report (Dec 2025) · EOHLC Compliance Model v1.5 · 177 Communities
        </p>

        {/* TABS */}
        <div style={{ display: "flex", gap: 0, marginTop: 20, borderBottom: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap" }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              background: "none",
              border: "none",
              padding: "10px 16px",
              fontSize: 13,
              fontWeight: tab === t ? 600 : 400,
              color: tab === t ? "#f59e0b" : "#64748b",
              borderBottom: tab === t ? "2px solid #f59e0b" : "2px solid transparent",
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "inherit",
            }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: "28px 40px 60px", maxWidth: 1200, margin: "0 auto" }}>

        {/* ===== OVERVIEW TAB ===== */}
        {tab === "Overview" && (
          <div>
            <SectionHead num="01" title="The Mandate at a Glance" subtitle="What § 3A actually requires — and the scale of the theoretical buildout" />
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
              <StatCard label="Communities Mandated" value="177" sub="Excluding Boston" accent="#3b82f6" />
              <StatCard label="Existing Housing Stock" value={formatNum(totalHousing)} sub="2020 Census" accent="#7c3aed" />
              <StatCard label="Required Zoning Capacity" value={formatNum(totalRequired)} sub="Theoretical units — not required to be built" accent="#dc2626" />
              <StatCard label="Capacity as % of Stock" value={`${(totalRequired/totalHousing*100).toFixed(1)}%`} sub="Avg across all 177 communities" accent="#f59e0b" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 12 }}>Category Breakdown</div>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2, padding: 20 }}>
                  {catSummary.map(c => (
                    <div key={c.category} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 10, height: 10, borderRadius: 2, background: COLORS[c.category] }} />
                        <span style={{ fontSize: 14, fontWeight: 500 }}>{c.category}</span>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>{c.count}</span>
                        <span style={{ fontSize: 12, color: "#64748b", marginLeft: 8 }}>towns · {c.pct}% req</span>
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: 12, fontSize: 12, color: "#64748b" }}>
                    Rapid Transit = 25% of housing stock · Commuter Rail = 15% · Adjacent = 10% · Adjacent Small = 5%
                  </div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 12 }}>Top 10 — Required Capacity</div>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2, padding: 12 }}>
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={top20.slice(0,10)} layout="vertical" margin={{ left: 100, right: 20, top: 5, bottom: 5 }}>
                      <XAxis type="number" tick={{ fill: "#64748b", fontSize: 11 }} />
                      <YAxis type="category" dataKey="n" tick={{ fill: "#94a3b8", fontSize: 11 }} width={95} />
                      <Tooltip
                        contentStyle={{ background: "#0f172a", border: "1px solid #475569", borderRadius: 6, fontSize: 12, padding: "10px 14px" }} itemStyle={{ color: "#f8fafc" }} labelStyle={{ color: "#fbbf24", fontWeight: 600 }}
                        formatter={(v) => [formatNum(v), "Required Units"]}
                      />
                      <Bar dataKey="r" fill="#f59e0b" radius={[0,2,2,0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <QuoteBlock
              text="The law does not require construction of these units, and experts say the real number of new housing that will be built due to the law will likely be much lower."
              source="WBUR News, May 2024"
              color="#dc2626"
            />
          </div>
        )}

        {/* ===== FACTS vs INTENT TAB ===== */}
        {tab === "Facts vs Intent" && (
          <div>
            <SectionHead num="02" title="The Socratic Tension" subtitle="What the law actually does vs. how it's justified — line by line" />

            <TensionRow
              fact='§ 3A: Communities "shall have a zoning ordinance or by-law that provides for at least 1 district... in which multi-family housing is permitted as of right"'
              intent='"Creating more housing is the single most important thing we can do to bring down the cost of living" — Gov. Healey'
              verdict="The law mandates zoning. It does not mandate construction. Zoning does not build houses. Capital does."
            />
            <TensionRow
              fact="297,190 theoretical unit capacity required across 177 towns — a compliance model exercise"
              intent='"Home for Everyone" initiative targets 220,000 new units over 10 years'
              verdict="Even EOHLC admits the model estimates maximum theoretical capacity, not realistic buildout. Market conditions, not zoning, determine what gets built."
            />
            <TensionRow
              fact="Minimum gross density: 15 units per acre. District must be within 0.5mi of transit."
              intent="Transit-oriented development will create walkable, sustainable communities"
              verdict="Many communities have no sewer infrastructure, rely on septic/wells. 15 units/acre on septic is physically implausible in many locations."
            />
            <TensionRow
              fact="Non-compliance = loss of state funding (Housing Choice, MassWorks, HousingWorks, Local Capital Projects Fund)"
              intent="Voluntary local compliance with supportive state partnership"
              verdict="This is economic coercion. Towns lose infrastructure funding they need — creating a double bind that pressures compliance regardless of local conditions."
            />
            <TensionRow
              fact='Court: costs are "anticipated possible costs" and "indirect" — therefore not an unfunded mandate'
              intent="The mandate imposes no direct costs on municipalities"
              verdict="Brensley calculated $4.49B in designer base fees alone. The court didn't say there were no costs — it said plaintiffs didn't quantify them specifically enough."
            />
            <TensionRow
              fact="Housing permits down 44% from 2021 peak. Interest rates 6%+. Construction costs $350+ psf average."
              intent="Removing zoning barriers will unlock housing production"
              verdict="The market is frozen by rates, costs, and capital availability — not by a lack of zoned parcels. You can zone the moon for multifamily — nothing gets built without financing."
            />

            <div style={{ marginTop: 32 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 12 }}>The Affordability Gap is Real — But Is It a Zoning Problem?</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2, padding: 16 }}>
                  <div style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>Price-to-Income Ratio (MA) — Higher = Less Affordable</div>
                  <ResponsiveContainer width="100%" height={220}>
                    <ComposedChart data={affordabilityTimeline} margin={{ left: 0, right: 10, top: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="year" tick={{ fill: "#64748b", fontSize: 11 }} />
                      <YAxis tick={{ fill: "#64748b", fontSize: 11 }} domain={[0, 8]} />
                      <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #475569", borderRadius: 6, fontSize: 12, padding: "10px 14px" }} itemStyle={{ color: "#f8fafc" }} labelStyle={{ color: "#fbbf24", fontWeight: 600 }} />
                      <Area type="monotone" dataKey="ratio" fill="rgba(220,38,38,0.15)" stroke="#dc2626" strokeWidth={2} name="Price/Income Ratio" />
                    </ComposedChart>
                  </ResponsiveContainer>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 6 }}>
                    Since 2000: prices up 73%, incomes up 4% (inflation-adjusted). That's not a zoning problem.
                  </div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2, padding: 16 }}>
                  <div style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>MA Housing Permits Issued (units)</div>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={permitData} margin={{ left: 0, right: 10, top: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="year" tick={{ fill: "#64748b", fontSize: 11 }} />
                      <YAxis tick={{ fill: "#64748b", fontSize: 11 }} />
                      <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #475569", borderRadius: 6, fontSize: 12, padding: "10px 14px" }} itemStyle={{ color: "#f8fafc" }} labelStyle={{ color: "#fbbf24", fontWeight: 600 }} />
                      <Bar dataKey="permits" fill="#3b82f6" radius={[2,2,0,0]} name="Permits" />
                    </BarChart>
                  </ResponsiveContainer>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 6 }}>
                    Permits down 44% from 2021 peak. The market is frozen — zoning isn't the bottleneck.
                  </div>
                </div>
              </div>
            </div>

            <QuoteBlock
              text="The regulations do not compel construction. They merely encourage it."
              source="Plymouth Superior Court, June 2025"
              color="#22c55e"
            />
            <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 8, lineHeight: 1.6 }}>
              The court's own words expose the contradiction: if the mandate "merely encourages" construction, on what basis can the state claim it will solve a housing production crisis?
            </div>
          </div>
        )}

        {/* ===== COST ANALYSIS TAB ===== */}
        {tab === "Cost Analysis" && (
          <div>
            <SectionHead num="03" title="The Brensley Cost Impact Report" subtitle="Designer Base Fees alone — before infrastructure, land, or financing costs" />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
              <StatCard label="Designer Base Fees" value="$4.49B" sub="DCAMM methodology @ 5.9%" accent="#dc2626" />
              <StatCard label="Catalyst Fund Grant" value="$15M" sub="Total state appropriation" accent="#22c55e" />
              <StatCard label="Unappropriated Deficit" value="$4.48B" sub="99.7% unfunded" accent="#f59e0b" />
              <StatCard label="Infrastructure Costs" value="$0*" sub="*Not yet calculated" accent="#64748b" />
            </div>

            <div style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 2, padding: 20, marginBottom: 28 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fca5a5", marginBottom: 12 }}>Brensley's Assumptions (Deliberately Conservative)</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
                {[
                  ["Construction cost/sf", "$250 (below $350 avg)"],
                  ["Gross unit size", "900 sf (incl. common)"],
                  ["Avg project size", "80 units"],
                  ["Avg construction cost/project", "$18M"],
                  ["Designer Base Fee %", "5.9% (DCAMM schedule)"],
                  ["Required units (3A mandate)", formatNum(totalRequired)],
                ].map(([k,v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize: 13, color: "#94a3b8" }}>{k}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#f8fafc", fontFamily: "'JetBrains Mono', monospace" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 12 }}>The Math, Simplified</div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2, padding: 24, fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 2, color: "#cbd5e1" }}>
              <div>{formatNum(totalRequired)} units × 900 sf = <span style={{color:"#f59e0b"}}>{formatNum(totalRequired * 900)} sf</span> total</div>
              <div>{formatNum(totalRequired * 900)} sf × $250/sf = <span style={{color:"#f59e0b"}}>${(totalRequired * 900 * 250 / 1e9).toFixed(2)}B</span> construction cost</div>
              <div>${(totalRequired * 900 * 250 / 1e9).toFixed(2)}B × 5.9% = <span style={{color:"#dc2626"}}>${(totalRequired * 900 * 250 * 0.059 / 1e9).toFixed(2)}B</span> designer fees</div>
              <div style={{marginTop: 12, color: "#f59e0b"}}>State appropriation: $15M → Coverage: {(15e6 / (totalRequired * 900 * 250 * 0.059) * 100).toFixed(2)}%</div>
            </div>

            <div style={{ marginTop: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 12 }}>What This Doesn't Include</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {[
                  "Land acquisition costs",
                  "Water/sewer infrastructure",
                  "Roadway improvements",
                  "Environmental remediation",
                  "Legal & permitting fees",
                  "Financing/carry costs",
                  "Impact fees & mitigation",
                  "School capacity expansion",
                  "Emergency services scaling"
                ].map(item => (
                  <div key={item} style={{ background: "rgba(255,255,255,0.03)", padding: "10px 14px", borderRadius: 2, fontSize: 12, color: "#94a3b8", borderLeft: "2px solid #334155" }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <QuoteBlock
              text="The State of Massachusetts has not defined 'specific' or 'direct costs' for the MBTA Communities Act... Based on the 3A mandate's required zoning of over 344,000 residential units, the Designer Base Fees alone equate to over $4.4B."
              source="Brensley Cost Impact Report, Dec 2025"
              color="#dc2626"
            />
          </div>
        )}

        {/* ===== COMMUNITY DATA TAB ===== */}
        {tab === "Community Data" && (
          <div>
            <SectionHead num="04" title="All 177 Communities" subtitle="Search, sort, and explore the mandate by town" />

            <div style={{ marginBottom: 16 }}>
              <input
                type="text"
                placeholder="Search community (e.g. Marblehead)..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 2,
                  padding: "10px 16px",
                  color: "#f8fafc",
                  fontSize: 14,
                  width: 360,
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
              <span style={{ fontSize: 12, color: "#64748b", marginLeft: 12 }}>{filtered.length} communities</span>
            </div>

            <div style={{ maxHeight: 500, overflow: "auto", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ position: "sticky", top: 0, background: "#0f172a", zIndex: 1 }}>
                    {[
                      ["n", "Community"],
                      ["c", "Category"],
                      ["h", "2020 Housing Units"],
                      ["r", "Required Capacity"],
                      ["pct", "% of Stock"],
                      ["cost", "Est. Designer Fees"],
                    ].map(([col, label]) => (
                      <th key={col} onClick={() => handleSort(col === "pct" ? "r" : col === "cost" ? "r" : col)}
                        style={{
                          textAlign: col === "n" || col === "c" ? "left" : "right",
                          padding: "10px 14px",
                          cursor: "pointer",
                          color: "#94a3b8",
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                          userSelect: "none",
                        }}>{label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(d => {
                    const fees = d.r * 900 * 250 * 0.059;
                    const isMarblehead = d.n === "Marblehead";
                    return (
                      <tr key={d.n} style={{
                        background: isMarblehead ? "rgba(245,158,11,0.1)" : "transparent",
                        borderBottom: "1px solid rgba(255,255,255,0.03)",
                      }}>
                        <td style={{ padding: "8px 14px", fontWeight: isMarblehead ? 700 : 400, color: isMarblehead ? "#fbbf24" : "#e2e8f0" }}>{d.n}</td>
                        <td style={{ padding: "8px 14px" }}>
                          <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: COLORS[d.c], marginRight: 6, verticalAlign: "middle" }} />
                          <span style={{ fontSize: 12, color: "#94a3b8" }}>{d.c}</span>
                        </td>
                        <td style={{ padding: "8px 14px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>{formatNum(d.h)}</td>
                        <td style={{ padding: "8px 14px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#f59e0b" }}>{formatNum(d.r)}</td>
                        <td style={{ padding: "8px 14px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>{(d.r/d.h*100).toFixed(1)}%</td>
                        <td style={{ padding: "8px 14px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#dc2626" }}>${(fees/1e6).toFixed(1)}M</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 12 }}>Housing Stock vs. Required Capacity — All 177 Communities</div>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2, padding: 16 }}>
                <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 12, flexWrap: "wrap" }}>
                  {Object.entries(COLORS).map(([cat, color]) => (
                    <div key={cat} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: color }} />
                      <span style={{ fontSize: 11, color: "#94a3b8" }}>{cat}</span>
                    </div>
                  ))}
                </div>
                <ResponsiveContainer width="100%" height={350}>
                  <ScatterChart margin={{ left: 10, right: 20, top: 5, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="housingUnits" name="Housing Units" tick={{ fill: "#64748b", fontSize: 10 }} label={{ value: "2020 Housing Units", position: "bottom", offset: 5, fill: "#64748b", fontSize: 11 }} />
                    <YAxis dataKey="requiredCapacity" name="Required Capacity" tick={{ fill: "#64748b", fontSize: 10 }} label={{ value: "Required Capacity", angle: -90, position: "insideLeft", fill: "#64748b", fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{ background: "#0f172a", border: "1px solid #475569", borderRadius: 6, fontSize: 12, padding: "10px 14px" }}
                      itemStyle={{ color: "#f8fafc" }}
                      labelStyle={{ color: "#fbbf24", fontWeight: 700, marginBottom: 4 }}
                      formatter={(v, name) => [formatNum(v), name]}
                      labelFormatter={(v) => {
                        const match = scatterData.find(d => d.housingUnits === v);
                        return match ? `${match.name} (${match.category})` : "";
                      }}
                    />
                    {Object.entries(COLORS).map(([cat, color]) => (
                      <Scatter key={cat} name={cat} data={scatterData.filter(d => d.category === cat)} fill={color} opacity={0.75} />
                    ))}
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* ===== CUI BONO TAB ===== */}
        {tab === "Cui Bono" && (
          <div>
            <SectionHead num="05" title="Cui Bono — Who Actually Benefits?" subtitle="Follow the money, the land values, and the institutional incentives" />

            {/* The Pipeline Reality */}
            <div style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.15)", borderRadius: 2, padding: 24, marginBottom: 28 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fca5a5", marginBottom: 12, fontFamily: "'Playfair Display', Georgia, serif" }}>
                The Building Boom That Isn't
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 16 }}>
                <StatCard label="Units in Pipeline" value="6,898" sub="After 5 years of the law" accent="#dc2626" />
                <StatCard label="% of 177-Town Housing Stock" value="<1%" sub="6,898 of 1.94M existing units" accent="#dc2626" />
                <StatCard label="% of 220K State Goal" value="3%" sub="6,898 of 220,000 target" accent="#f59e0b" />
                <StatCard label="Communities w/ Activity" value="34" sub="Of 177 mandated (19%)" accent="#64748b" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: "rgba(255,255,255,0.03)", padding: 16, borderRadius: 2 }}>
                  <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>Pipeline Breakdown — Where the Units Come From</div>
                  <ResponsiveContainer width="100%" height={180}>
                    <BarChart data={[
                      { type: "Small (<30 units)", projects: 53, units: 800 },
                      { type: "Medium (30-99)", projects: 30, units: 1600 },
                      { type: "Large (100+)", projects: 19, units: 4498 },
                    ]} margin={{ left: 0, right: 10, top: 5, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="type" tick={{ fill: "#94a3b8", fontSize: 10 }} />
                      <YAxis tick={{ fill: "#64748b", fontSize: 10 }} />
                      <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #475569", borderRadius: 6, fontSize: 12 }} itemStyle={{ color: "#f8fafc" }} labelStyle={{ color: "#fbbf24", fontWeight: 600 }} />
                      <Bar dataKey="units" fill="#dc2626" radius={[2,2,0,0]} name="Units" />
                    </BarChart>
                  </ResponsiveContainer>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
                    19 large projects (18% of all projects) account for 65%+ of all units. The "missing middle" story is modest.
                  </div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.03)", padding: 16, borderRadius: 2 }}>
                  <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>The Math That Doesn't Work</div>
                  <div style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.7 }}>
                    <p style={{ margin: "0 0 10px" }}>297,190 units mandated (zoning capacity). After 5 years: 6,898 in the pipeline. At this rate:</p>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: 2, padding: "8px 12px", background: "rgba(255,255,255,0.03)", borderRadius: 2 }}>
                      <div>Year 5: <span style={{ color: "#f59e0b" }}>6,898</span> units (2.3% of mandate)</div>
                      <div>At current pace: <span style={{ color: "#dc2626" }}>~215 years</span> to reach zoned capacity</div>
                      <div>220K goal by 2035: needs <span style={{ color: "#dc2626" }}>22,000/yr</span> — getting ~1,380/yr from 3A</div>
                    </div>
                  </div>
                </div>
              </div>
              <QuoteBlock
                text="It represents progress that is modest compared to need. It's not necessarily transformative gains."
                source="Amy Dain, Boston Indicators, Jan 2026"
                color="#dc2626"
              />
            </div>

            {/* Who Benefits Grid */}
            <div style={{ fontSize: 16, fontWeight: 700, color: "#f8fafc", marginBottom: 16, fontFamily: "'Playfair Display', Georgia, serif" }}>
              So Who Actually Benefits?
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
              {/* Beneficiary 1: Landowners */}
              <div style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: 2, padding: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fbbf24", marginBottom: 8 }}>🏗️ 1. Landowners in Rezoned Districts</div>
                <div style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.6 }}>
                  When land is rezoned from single-family to 15 units/acre multifamily as-of-right, its value can increase 3-10x overnight.
                  A 1-acre lot worth $500K as single-family could be worth $2-5M as a multifamily development parcel. <strong style={{ color: "#fbbf24" }}>This is a
                  government-mandated wealth transfer to landowners.</strong> They didn't lobby for it, but they receive a windfall.
                </div>
                <div style={{ fontSize: 11, color: "#64748b", marginTop: 8 }}>
                  Key question: Who owns the land in the 3A districts? Is ownership concentrated?
                </div>
              </div>

              {/* Beneficiary 2: Consulting/Advocacy Industry */}
              <div style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.15)", borderRadius: 2, padding: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#a78bfa", marginBottom: 8 }}>📋 2. The Compliance Industrial Complex</div>
                <div style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.6 }}>
                  177 towns all need zoning consultants, legal counsel, GIS mapping, planning studies, environmental review, and
                  public engagement consultants. The state has already spent <strong>$6M+ in "technical assistance"</strong> to 156 of 177 towns.
                  CHAPA alone ran TA programs in 45+ communities. MHP, MAPC, regional planning agencies — all funded.
                </div>
                <div style={{ fontSize: 11, color: "#64748b", marginTop: 8 }}>
                  Key question: Who funds CHAPA, AHMA, and the advocacy orgs pushing compliance?
                </div>
              </div>

              {/* Beneficiary 3: Developers (eventually) */}
              <div style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.15)", borderRadius: 2, padding: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#60a5fa", marginBottom: 8 }}>🏢 3. Developers — But Not How You'd Think</div>
                <div style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.6 }}>
                  The real gift is three words: <strong style={{ color: "#60a5fa" }}>"as of right."</strong> This doesn't just rezone — it removes
                  the town's ability to deny or condition projects via special permits. No hearings, no neighborhood input, no negotiated
                  concessions. When rates drop and capital returns, developers have pre-cleared sites with zero entitlement risk.
                  <strong> The zoning is the option — they exercise it when the market turns.</strong>
                </div>
                <div style={{ fontSize: 11, color: "#64748b", marginTop: 8 }}>
                  75%+ of pipeline units come from 19 large projects. "Missing middle" is the story; large-scale is the reality.
                </div>
              </div>

              {/* Beneficiary 4: State Power */}
              <div style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.15)", borderRadius: 2, padding: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#f87171", marginBottom: 8 }}>🏛️ 4. State Government — The Permanent Win</div>
                <div style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.6 }}>
                  The Act establishes a precedent: the state can override local zoning via statute, enforce through AG lawsuits,
                  and punish non-compliance by withholding infrastructure funding. <strong style={{ color: "#f87171" }}>This precedent is permanent.</strong> Even
                  if 3A is eventually modified, the legal framework — affirmed by the SJC — for state preemption of local zoning is now settled law.
                </div>
                <div style={{ fontSize: 11, color: "#64748b", marginTop: 8 }}>
                  Already being used as model: Boston Indicators calls for "bypassing local zoning" for next round of reforms.
                </div>
              </div>
            </div>

            {/* ===== FOLLOW THE MONEY: THE NETWORK ===== */}
            <div style={{ background: "linear-gradient(135deg, rgba(220,38,38,0.08) 0%, rgba(124,58,237,0.08) 100%)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 2, padding: 28, marginBottom: 28 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fca5a5", marginBottom: 6, fontFamily: "'Playfair Display', Georgia, serif" }}>
                Follow the Money: Names, Networks, Connections
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 20 }}>
                Public records, campaign filings, nonprofit disclosures, corporate registrations, and investigative reporting — not speculation.
              </div>

              {/* The Governor's Dark Money Operation */}
              <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: 2, padding: 20, marginBottom: 16, borderLeft: "3px solid #dc2626" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fca5a5", marginBottom: 10 }}>🔴 One Commonwealth Inc. — The Governor's Dark Money 501(c)(4)</div>
                <div style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.7, marginBottom: 12 }}>
                  In 2024, Governor Healey and Lt. Gov. Driscoll created <strong>One Commonwealth Inc.</strong>, a 501(c)(4) nonprofit that 
                  <strong style={{ color: "#fca5a5" }}> is not required to disclose its donors</strong>. It spends money on ads promoting Healey's housing 
                  "wins" ($250K ad buy in 2025), runs pro-MBTA-Communities messaging in towns before compliance votes, and coordinates with 
                  Abundant Housing MA on "effective messaging" strategy.
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <div style={{ background: "rgba(255,255,255,0.04)", padding: 12, borderRadius: 2 }}>
                    <div style={{ fontSize: 11, color: "#fca5a5", fontWeight: 600, marginBottom: 6 }}>WHO RUNS IT</div>
                    <div style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.6 }}>
                      <strong>President:</strong> Lynda Tocci — senior advisor, Healey 2022 campaign; works at <em>Dewey Square Group</em><br/>
                      <strong>Exec Director:</strong> Katie Prisco-Buxbaum — Driscoll campaign strategist; firm still on Driscoll campaign payroll<br/>
                      <strong>Clerk/Director:</strong> Jack Corrigan — consultant, John Kerry presidential campaign
                    </div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", padding: 12, borderRadius: 2 }}>
                    <div style={{ fontSize: 11, color: "#fca5a5", fontWeight: 600, marginBottom: 6 }}>THE BAKER CONNECTION</div>
                    <div style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.6 }}>
                      Dewey Square Group — the lobbying firm where One Commonwealth's president works — was <strong style={{ color: "#fbbf24" }}>co-founded 
                      by Charlie Baker</strong>, the governor who signed the MBTA Communities Act into law in 2021. The firm that created the law 
                      now houses the people enforcing it.
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6, padding: "10px 12px", background: "rgba(255,255,255,0.03)", borderRadius: 2 }}>
                  <strong style={{ color: "#fbbf24" }}>Only known donor:</strong> DraftKings — disclosed only because the MA Gaming Commission 
                  requires it. Spokesperson Jessica Silva-Hodges refused to name other donors, describing them as "a diverse coalition of 
                  business leaders and community advocates." As Northeastern's Prof. Panagopoulos told WBUR: these nonprofits give officials "a tool 
                  to influence politics without having to name donors." <em>(WBUR, Dec 2025)</em>
                </div>
              </div>

              {/* The Fish Dynasty */}
              <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: 2, padding: 20, marginBottom: 16, borderLeft: "3px solid #f59e0b" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fbbf24", marginBottom: 10 }}>🐟 The Fish Family — Two Branches, One Industry</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ background: "rgba(255,255,255,0.04)", padding: 12, borderRadius: 2 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#fbbf24", marginBottom: 6 }}>Branch 1: Peabody Properties (Edward Fish Dynasty)</div>
                    <div style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.6 }}>
                      Founded 1976. Now led by <strong>Karen Fish-Will</strong> (CEO) and <strong>Melissa Fish-Crane</strong> (COO) — daughters of the late Edward Fish. 
                      <strong> 16,350+ units</strong> managed across New England. Brothers Kevin Fish (Northeast Interiors) and Michael Fish (Delbrook Construction) also in the industry.
                      <br/><br/>
                      <span style={{ color: "#f59e0b" }}>Political activity:</span> The family donated $22,500+ to defeat the 2010 40B repeal ballot question. 
                      Edward Fish and John Fish were probed by the Inspector General for <strong>excess profits at Turtle Crossing</strong> (40B project in Braintree) — 
                      the IG called 40B profit schemes "one of the greatest financial scandals in Massachusetts history."
                    </div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", padding: 12, borderRadius: 2 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#fbbf24", marginBottom: 6 }}>Branch 2: Suffolk Construction (John Fish)</div>
                    <div style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.6 }}>
                      <strong>Net worth: $2.3B</strong> (Forbes 2024). Largest builder in New England. Chairman of The Real Estate Roundtable, 
                      former chair of Greater Boston Chamber and Fed Reserve Bank of Boston. Built Millennium Tower, Encore Boston Harbor.
                      <br/><br/>
                      <span style={{ color: "#f59e0b" }}>The power web:</span> Founded the <strong>Massachusetts Competitive Partnership (MACP)</strong> in 2010 — 
                      a "New Vault" of 16 CEOs including Fidelity's Abby Johnson, Liberty Mutual, Bank of America, Kraft Group, Eversource, Raytheon. 
                      MACP's CEO? <strong>Jay Ash</strong> — Baker's former Secretary of Housing & Economic Development. 
                      Suffolk Construction is the GC on Portico at Suffolk Downs ($5M Healey HDIP grant). Co-founded Mass Opportunity Alliance (2024).
                    </div>
                  </div>
                </div>
              </div>

              {/* HYM / Suffolk Downs */}
              <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: 2, padding: 20, marginBottom: 16, borderLeft: "3px solid #60a5fa" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#60a5fa", marginBottom: 10 }}>🏗️ HYM Investment Group & Suffolk Downs — The $5B Test Case</div>
                <div style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.7, marginBottom: 10 }}>
                  Tom O'Brien's HYM is building <strong>10,000 units at Suffolk Downs</strong> — the single largest housing development in the 
                  region's history, across 161 acres in Revere and East Boston. Healey awarded $5M in HDIP tax credits for the Portico building. 
                  Revere granted an additional <strong>$15M tax break</strong>. Related Fund Management provided $226M in construction financing. 
                  Suffolk Construction (John Fish) is the general contractor.
                </div>
                <div style={{ background: "rgba(255,255,255,0.04)", padding: 12, borderRadius: 2, marginBottom: 8 }}>
                  <div style={{ fontSize: 12, color: "#60a5fa", fontWeight: 600, marginBottom: 4 }}>The Nonprofit Loophole (Boston Globe, April 2025)</div>
                  <div style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.6 }}>
                    HYM donated <strong>$10,000 to a nonprofit run by Rep. Adrian Madaro</strong> — whose district contains the Suffolk Downs construction site. 
                    Amazon also gave $10K. Top lobbying firms (Commonwealth Counsel, Serlin Haley, Travaglini Scorzoni & Kiley, Rasky Partners) all donated. 
                    Under MA law, lobbyists are capped at $200 to campaigns — but nonprofit donations have <strong>no cap and no disclosure requirement</strong>. 
                    Columbia Law's Prof. Briffault: "A donation like this is like a gift to the official." One week after the Globe inquired, 
                    Madaro filed an ethics disclosure.
                  </div>
                </div>
              </div>

              {/* The Advocacy Pipeline */}
              <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: 2, padding: 20, marginBottom: 16, borderLeft: "3px solid #a78bfa" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#a78bfa", marginBottom: 10 }}>🔄 The Advocacy Pipeline — Where "Grassroots" Meets Developer Money</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <div style={{ background: "rgba(255,255,255,0.04)", padding: 12, borderRadius: 2 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#a78bfa", marginBottom: 4 }}>CHAPA</div>
                    <div style={{ fontSize: 11, color: "#cbd5e1", lineHeight: 1.5 }}>
                      Board includes <strong>developers who directly benefit</strong> from 3A: Kenan Bigby (Trinity Financial), 
                      Dara Kovel (Beacon Communities), Jason Korb (Capstone Communities). CEO Rachel Heller sits on 
                      Healey's Housing Advisory Council. Spent $100K to defeat 40B repeal. 
                      Runs TA programs in 45+ MBTA communities.
                    </div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", padding: 12, borderRadius: 2 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#a78bfa", marginBottom: 4 }}>ABUNDANT HOUSING MA</div>
                    <div style={{ fontSize: 11, color: "#cbd5e1", lineHeight: 1.5 }}>
                      501(c)(4) — donors not disclosed. Exec director Jesse Kanson-Benanav was on <strong>Healey's 
                      Transition Committee</strong>. Received <strong>$500K from Barr Foundation</strong> specifically for 
                      MBTA Communities organizing. Coordinates messaging with Healey's One Commonwealth. 
                      Former employer: B'nai B'rith Housing (a developer).
                    </div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", padding: 12, borderRadius: 2 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#a78bfa", marginBottom: 4 }}>BARR FOUNDATION</div>
                    <div style={{ fontSize: 11, color: "#cbd5e1", lineHeight: 1.5 }}>
                      $140M/yr grantmaking. Private foundation — donors/trustees not publicly accountable to voters. 
                      <strong>$1M to MHP</strong> for MBTA compliance. <strong>$500K to AHMA</strong> for organizing. 
                      Also funds MAPC, Boston Indicators. 
                      A single private foundation is significantly funding the 3A compliance/advocacy infrastructure.
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "#a78bfa", fontWeight: 500, padding: "8px 12px", background: "rgba(167,139,250,0.08)", borderRadius: 2 }}>
                  Pattern: Developer sits on CHAPA board → CHAPA advocates for 3A → Developer gets as-of-right entitlements → 
                  Developer builds with state funding → Developer donates to keep system running. At every node, the same names appear.
                </div>
              </div>

              {/* The Revolving Door */}
              <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: 2, padding: 20, marginBottom: 16, borderLeft: "3px solid #34d399" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#34d399", marginBottom: 10 }}>🚪 The Revolving Door</div>
                <div style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.7, marginBottom: 12 }}>
                  The same people rotate between state housing agencies, developer boards, advocacy organizations, and advisory commissions:
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { name: "Jay Ash", path: "Baker's Sec. of Housing → CEO of MACP (John Fish's org of 16 CEOs)", color: "#34d399" },
                    { name: "Jesse Kanson-Benanav", path: "B'nai B'rith Housing (developer) → Healey Transition Committee → Exec Dir of AHMA (501c4)", color: "#34d399" },
                    { name: "Kenan Bigby", path: "Trinity Financial (developer) → CHAPA Board → Healey's Housing Advisory Council", color: "#34d399" },
                    { name: "Rachel Heller", path: "CEO of CHAPA (advocacy) → Healey's Housing Advisory Council → quotes in pro-3A coverage", color: "#34d399" },
                    { name: "Tamara Small", path: "CEO of NAIOP (developer lobby) → Healey's Unlocking Housing Production Commission", color: "#34d399" },
                    { name: "Lynda Tocci", path: "Healey 2022 campaign advisor → Dewey Square Group (Baker co-founded) → President of One Commonwealth", color: "#34d399" },
                    { name: "Chrystal Kornegay", path: "MassHousing (quasi-public lender) → Healey's Housing Advisory Council — finances the developers who sit next to her", color: "#34d399" },
                    { name: "Ed Augustus", path: "Healey's Housing Secretary → announces HDIP awards to developers → attends developer groundbreakings", color: "#34d399" },
                  ].map((p, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.04)", padding: 10, borderRadius: 2 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: p.color }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 3 }}>{p.path}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Major Players - Developer Pipeline */}
              <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: 2, padding: 20, marginBottom: 0, borderLeft: "3px solid #f59e0b" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fbbf24", marginBottom: 10 }}>💰 The Developers Who Benefit — And Their Government Connections</div>
                <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 12 }}>
                  These firms receive state housing funds, sit on advisory boards that shape policy, and benefit from 3A as-of-right zoning:
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                  {[
                    { name: "HYM Investment Group", detail: "10,000-unit Suffolk Downs. $5M HDIP grant. $10K to legislator's nonprofit. Suffolk Construction (Fish) is GC.", accent: "#60a5fa" },
                    { name: "Beacon Communities", detail: "Howard Cohen. Dara Kovel on CHAPA board. Multiple Healey-funded projects. $5K to protect 40B. $850K decarbonization grant.", accent: "#60a5fa" },
                    { name: "WinnCompanies", detail: "Larry Curtis / Gilbert Winn. 106,000+ apartments. Nation's largest affordable portfolio. $2B McCormack redevelopment w/ state funding.", accent: "#60a5fa" },
                    { name: "Trinity Financial", detail: "Kenan Bigby on CHAPA board AND Healey's Advisory Council. $360M Curtis Apts w/ state. $1B+ in development managed.", accent: "#60a5fa" },
                    { name: "Suffolk Construction", detail: "John Fish ($2.3B). Chairman MACP. GC on Suffolk Downs Portico. Founded Mass Opportunity Alliance 2024. Donates R and D.", accent: "#60a5fa" },
                    { name: "Peabody Properties", detail: "Fish-Will / Fish-Crane family. 16,350 units. Inspector General probed 40B profits. $22.5K to protect 40B. Salem, Scituate projects.", accent: "#60a5fa" },
                  ].map((d, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.04)", padding: 12, borderRadius: 2 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: d.accent, marginBottom: 4 }}>{d.name}</div>
                      <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.5 }}>{d.detail}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: "#fbbf24", marginTop: 12, fontStyle: "italic" }}>
                  NAIOP (1,800 member developer lobby) successfully lobbied to triple HDIP from $10M to $30M/yr, secured Office Conversion Tax Credits, 
                  and now forming "Housing for Massachusetts" PAC to fight rent control ballot question. Their CEO sits on Healey's housing commission.
                </div>
              </div>
            </div>

            {/* Paper Compliance */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2, padding: 24, marginBottom: 24 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#f8fafc", marginBottom: 12 }}>The "Paper Compliance" Paradox</div>
              <div style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.7, marginBottom: 12 }}>
                Towns like Boxford, Duxbury, and Weston are openly pursuing "paper compliance" — rezoning already-built-out areas
                (existing condo complexes, commercial properties with no redevelopment incentive) to technically satisfy the law
                without enabling a single new unit. <strong>The state is allowing this.</strong>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                <div style={{ background: "rgba(255,255,255,0.03)", padding: 12, borderRadius: 2, borderLeft: "2px solid #f59e0b" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#fbbf24" }}>Boxford</div>
                  <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>Rezoned The Willows — an existing, built-out condo complex. 75% owner approval needed for any change. Zero new units expected.</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.03)", padding: 12, borderRadius: 2, borderLeft: "2px solid #f59e0b" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#fbbf24" }}>Duxbury</div>
                  <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>Rezoned existing condos at Village at Duxbury and Island Creek apartments. Already built out at near-target density.</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.03)", padding: 12, borderRadius: 2, borderLeft: "2px solid #f59e0b" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#fbbf24" }}>Weston</div>
                  <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>Chose sites with existing commercial use whose owners publicly stated they have no plans to build housing.</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: "#f59e0b", marginTop: 12, fontWeight: 500 }}>
                If the state accepts paper compliance, what exactly is the law accomplishing besides the transfer of zoning authority?
              </div>
            </div>

            {/* Questions You're Not Asking */}
            <div style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(124,58,237,0.06) 100%)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: 2, padding: 24 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fbbf24", marginBottom: 16, fontFamily: "'Playfair Display', Georgia, serif" }}>
                Questions You're Not Asking Yet
              </div>
              {[
                {
                  q: "Why is Boston exempt?",
                  a: "The city with the most acute housing pressure, the most MBTA service, and the highest rents is carved out of the Zoning Act entirely. If this is about transit-oriented housing, why exclude the transit hub?"
                },
                {
                  q: "If this is about transit, why are 93 'adjacent' towns with NO transit stations included?",
                  a: "53% of mandated communities have no MBTA station. They're included because they border a town that does. The 'transit-oriented' framing doesn't hold when the majority of affected towns have no transit to orient to."
                },
                {
                  q: "Who owns the land in the rezoned parcels — and did they know before the zoning maps were drawn?",
                  a: "Rezoning creates instant land value appreciation. If anyone with advance knowledge of district boundaries acquired parcels beforehand, that's worth investigating. Public records exist."
                },
                {
                  q: "What's the relationship between housing advocacy orgs and the development industry?",
                  a: "CHAPA's board includes Trinity Financial's Kenan Bigby, Beacon Communities' Dara Kovel, and Capstone's Jason Korb — developers who directly benefit from as-of-right zoning. AHMA's Kanson-Benanav came from B'nai B'rith Housing (a developer) and was placed on Healey's Transition Committee. The Barr Foundation funds $1.5M+ into MBTA Communities compliance advocacy. The advocates ARE the industry."
                },
                {
                  q: "Why does the law contain zero affordability requirements?",
                  a: "The law is sold as helping 'teachers, nurses, firefighters.' But nothing in § 3A requires a single affordable unit. What gets built is market-rate: $2,500-4,000/month. The people in the talking points can't afford what this law produces."
                },
                {
                  q: "What happens to property taxes and school budgets when multifamily goes in?",
                  a: "Multifamily typically generates less property tax per student than single-family. Towns bear the service costs (schools, fire, police, water) for new residents. The state shifted the zoning obligation — but not the fiscal burden."
                },
                {
                  q: "Is anne2026.com a campaign domain?",
                  a: "Brensley's contact email is info@anne2026.com. That's a forward-looking domain. If she's positioning for a 2026 run, the Cost Impact Report doubles as campaign infrastructure for a municipal accountability platform."
                },
                {
                  q: "What's the endgame if 3A doesn't produce units?",
                  a: "Boston Indicators' report already calls for the state to 'bypass local zoning to directly allow different types of housing.' 3A isn't the end — it's the precedent. The next step is eliminating local zoning review entirely."
                },
                {
                  q: "Why does the Governor's housing advocacy nonprofit refuse to name its donors?",
                  a: "One Commonwealth, Healey's 501(c)(4), has spent $250K+ on ads and run pro-compliance messaging in towns — but won't disclose who funds it. Its president works at Dewey Square Group (co-founded by Charlie Baker, who signed 3A). DraftKings is the only known donor, disclosed only because gaming regulators required it. If the policy is good, why hide who's paying for it?"
                },
                {
                  q: "Why do developers who benefit from 3A sit on the boards that shape 3A policy?",
                  a: "Trinity Financial's Bigby sits on CHAPA's board AND Healey's Housing Advisory Council. NAIOP's CEO sits on Healey's Unlocking Housing Production Commission. Beacon Communities' Kovel sits on CHAPA's board while receiving state housing grants. The people advising the Governor on housing policy are the same people who profit from the advice."
                },
                {
                  q: "How do developers bypass campaign finance limits via lawmaker nonprofits?",
                  a: "Boston Globe (April 2025): MA lobbyists are capped at $200 in campaign donations — but can give unlimited, undisclosed amounts to nonprofits run by legislators. HYM gave $10K to Rep. Madaro's nonprofit while building 10,000 units in his district. Federal law prohibits this. Massachusetts does not."
                },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < 7 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fbbf24" }}>{item.q}</div>
                  <div style={{ fontSize: 13, color: "#cbd5e1", marginTop: 4, lineHeight: 1.6, paddingLeft: 16, borderLeft: "2px solid rgba(245,158,11,0.2)" }}>{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== MONEY TRAIL TAB ===== */}
        {tab === "Money Trail" && (() => {

          const sections = [
            { id: "guns", label: "Smoking Guns", icon: "🔥" },
            { id: "devs", label: "Developer $$$", icon: "🏗️" },
            { id: "lobby", label: "Lobby Firms", icon: "📋" },
            { id: "web", label: "The Web", icon: "🕸️" },
          ];

          const smokingGuns = [
            {
              id: "baker", headline: "The Governor Who Signed It → Now Profits From It",
              amount: "$4,650 in donations", color: "#dc2626",
              short: "Charles Baker signed § 3A into law, left office, joined Dewey Square Group, now donates to the law's author and enforcer.",
              detail: "Baker signed § 3A as governor (Jan 2021). After leaving office, he joined Dewey Square Group — the lobbying firm that runs Governor Healey's dark-money nonprofit 'One Commonwealth.' From DSG, Baker donated: $1,000 to Campbell (2/24/25), $1,000 to Campbell (5/6/24), $1,000 to Campbell (8/31/22), $250 to Crighton (12/1/25), $200 to Crighton (11/1/22), $200 to Crighton (1/5/21). He's funding the author (Crighton) and enforcer (Campbell) of the law he signed."
            },
            {
              id: "bialecki", headline: "Baker's Housing Secretary → Now a Developer",
              amount: "$21,200 from Redgate", color: "#f59e0b",
              short: "Gregory Bialecki was Baker's Secretary of Housing & Economic Development. Now at Redgate, a real estate development firm donating to Healey, Campbell, and Honan.",
              detail: "Bialecki served as Baker's Secretary of Housing & Economic Development (2013–2015), helping shape the policy framework that became § 3A. He left government and joined Redgate — a real estate development firm. Redgate employees donated $21,200 across 37 donations to Campbell, Healey, and Honan. The man who helped design the housing policy now profits from the development it mandates. Classic revolving door."
            },
            {
              id: "barr", headline: "Foundation Funds Compliance → Leaders Fund Enforcers",
              amount: "$16,000 to Campbell & Healey", color: "#059669",
              short: "Barr Foundation gave $1.5M+ to orgs doing 3A compliance work. Co-founder Hostetter and CEO Canales then max-donate to the officials who enforce the mandate.",
              detail: "Barr Foundation gave $1M+ to MHP (quasi-state agency) for § 3A compliance technical assistance and $500K to Abundant Housing MA for 3A advocacy. Then: Barbara Hostetter (co-founder) donated $5,000 to Campbell across 5 max donations (2021–2025) and $4,000 to Healey across 4 donations. Jim Canales (CEO) donated $5,000 to Campbell (4 × $1K + 1 × $500) and $2,000 to Healey. Pattern: Fund the compliance apparatus → donate to the enforcers."
            },
            {
              id: "dsg", headline: "One Firm, Every Official, Every Year",
              amount: "$42K+ across all 4 officials", color: "#7c3aed",
              short: "Dewey Square Group employees donated to all 4 key officials. DSG runs Healey's dark-money nonprofit. Michael Whouley alone gave $3K to Campbell, $8K+ to Healey.",
              detail: "Dewey Square Group — lobbying firm, $2.7M in salaries 2019–2025. Client: MA Affordable Housing Alliance ($30K/yr). DSG runs Healey's 'One Commonwealth' dark-money nonprofit. Key donors: Michael Whouley → $3,000 to Campbell (3 × $1K), $8,750+ to Healey (multiple max donations), $1,000 to Honan, $250 to Crighton. Joseph Ricca ($300K/yr salary) → Crighton. Daniel Napolitano → Crighton, Campbell. Parisa Golkar → $1K to Healey. Every DSG lobbyist donates to every official in the chain."
            },
            {
              id: "goulston", headline: "Commission Member's Firm → 160+ Donations to Officials",
              amount: "$50K+ combined to Healey & Campbell", color: "#2563eb",
              short: "Goulston & Storrs partner David Linhart sits on Healey's Housing Commission while 160+ G&S attorneys donate to the officials whose policy his firm profits from.",
              detail: "Goulston & Storrs is a major real estate law firm. David Linhart is a partner AND sits on Healey's Unlocking Housing Production Commission — shaping § 3A implementation. Linhart personally donated to Healey ($700+), Campbell ($400), Wu ($1,450), Edwards ($300), and 4 other officials. Meanwhile, 60+ G&S attorneys donated $30K+ to Healey and $20K+ to Campbell. Top donors: Douglas Husid ($1K × 5 to Healey), Bill Dillon ($1K × 3 to Campbell), David Abromowitz ($1K × 4 to Campbell). The firm profits from every real estate transaction § 3A enables."
            },
            {
              id: "suffolk", headline: "The Builders Writing the Checks",
              amount: "$43K+ from Suffolk alone", color: "#dc2626",
              short: "Suffolk Construction — John Fish (CEO) gave $7,500 to Healey. Combined with JMA ($32K), NEI ($17K), Commodore ($15K): the builders donating to the mandate-makers.",
              detail: "The construction firms that would build what § 3A mandates are heavy donors: Suffolk Construction: $43,580 across 74 donations. CEO John Fish gave $7,500 to Healey. John Moriarty & Associates: $32,100 across 48 donations. Moriarty lists himself as 'contractor/builder.' NEI General Contracting: $17,125. Commodore Builders: $14,750 (Joe Albanese, CEO). New Boston Ventures: $20,525 (builder/developer). RISE: $7,950 (development & construction). Dagle Electrical: $24,800 — almost entirely to Campbell (the enforcement official). Total from major builders: $160K+."
            },
            {
              id: "boarddevs", headline: "CHAPA Board = Developer Board → They All Donate",
              amount: "$47K+ across 5 board members", color: "#f59e0b",
              short: "Developers who sit on CHAPA's board or Healey's commissions — shaping § 3A policy — donate to every key official. They shape the rules, then profit from them.",
              detail: "Kenan Bigby (Trinity Financial) — CHAPA board + Healey Housing Council → $9,825+ across 50+ donations to Wu, Walsh, Campbell, Galvin, Holmes, and others. Dara Kovel (Beacon Communities) — CHAPA board → $13,400+ across 55+ donations to Healey, Campbell, Driscoll, Wu, Spilka, Collins, Edwards, Honan. Levi Reilly (Marcus Partners) — Housing Production Commission → $15,500+ to Healey ($5,500), Wu, Spilka, Collins, Flynn. David Linhart (Goulston & Storrs) — Housing Production Commission → $3,375 to Healey, Campbell, Wu, Edwards, 3 others. Jason Korb (Capstone) — CHAPA board → $4,875 to Healey, Campbell, Azeem, Laredo."
            },
            {
              id: "scc", headline: "The Bundling Pattern: Same Date, Same Amount, Every Partner",
              amount: "$32K coordinated donations", color: "#7c3aed",
              short: "Smith, Costello & Crawford: every partner donates identical $200 to the same candidate on the same date. Textbook bundling.",
              detail: "Smith, Costello & Crawford — lobbying/government affairs firm. Total: $31,925. The pattern is unmistakable: On 12/7/25: Beth Card ($200), Michael Costello ($200), Jennifer Crawford ($200), Danielle Fleury ($200), James Smith ($200) → ALL to Crighton. Same date, same amount. This pattern repeats: 12/15/24, 1/5/24, 1/6/23, 7/24/21, 8/22/20, 5/24/19, 7/25/18 — always identical $200 from each partner, always same date. Crighton received $9,400 from SCC (16% of his total from lobbying firms). This is textbook bundled fundraising."
            },
          ];

          const developerDonors = [
            { firm: "Suffolk Construction", total: 43580, donations: 74, filers: "Campbell, Healey", topDonor: "John Fish (CEO) — $7,500 to Healey", type: "Builder" },
            { firm: "Markley Group", total: 34000, donations: 33, filers: "Healey", topDonor: "Adam Burnham, Donald Esson", type: "Properties" },
            { firm: "John Moriarty & Assoc.", total: 32100, donations: 48, filers: "Campbell, Healey, Honan", topDonor: "John Moriarty III — contractor/builder", type: "Builder" },
            { firm: "Peabody Properties", total: 30750, donations: 43, filers: "ALL FOUR", topDonor: "Melissa Crane (CEO)", type: "Property Mgmt" },
            { firm: "Newmark", total: 30175, donations: 39, filers: "Campbell, Healey", topDonor: "CRE brokers — commissions on every deal", type: "CRE Brokerage" },
            { firm: "HYM Investment Group", total: 28000, donations: 40, filers: "Campbell, Healey, Honan", topDonor: "Thomas O'Brien — $1K × 11", type: "Developer" },
            { firm: "Davis Companies", total: 24500, donations: 31, filers: "Campbell, Healey, Honan", topDonor: "Stephen & Jonathan Davis — $1K each", type: "Developer" },
            { firm: "Dagle Electrical", total: 24800, donations: 42, filers: "Campbell", topDonor: "James Dagle (President) — 99% to AG", type: "Builder" },
            { firm: "HNTB", total: 23850, donations: 39, filers: "Healey", topDonor: "Engineering/infrastructure consulting", type: "Engineering" },
            { firm: "Redgate", total: 21200, donations: 37, filers: "Campbell, Healey, Honan", topDonor: "🚨 Gregory Bialecki (Baker's Housing Sec)", type: "Developer" },
            { firm: "New Boston Ventures", total: 20525, donations: 36, filers: "Campbell, Healey, Honan", topDonor: "Bob Olson, David Goldman — builder", type: "Builder" },
            { firm: "Coldwell Banker", total: 20785, donations: 51, filers: "Campbell, Healey, Honan", topDonor: "RE agents — listing revenue", type: "CRE Brokerage" },
            { firm: "National Development", total: 19590, donations: 46, filers: "Campbell, Healey", topDonor: "Multiple partners max-donating", type: "Developer" },
            { firm: "NEI General Contracting", total: 17125, donations: 20, filers: "Campbell, Healey", topDonor: "President, VP, Chief Estimator", type: "Builder" },
            { firm: "Trinity Financial", total: 17345, donations: 48, filers: "Campbell, Healey, Honan", topDonor: "Kenan Bigby (CHAPA board)", type: "Developer" },
            { firm: "Schochet Associates", total: 16750, donations: 25, filers: "Campbell, Healey, Honan", topDonor: "Richard Henken — $10.7K to Honan", type: "Property Mgmt" },
            { firm: "Meredith Management", total: 16600, donations: 18, filers: "Campbell, Healey", topDonor: "John Rosenthal — RE developer", type: "Developer" },
            { firm: "Beacon Communities", total: 16277, donations: 69, filers: "Campbell, Healey, Honan", topDonor: "Dara Kovel (CHAPA board)", type: "Developer" },
            { firm: "Marcus Partners", total: 15500, donations: 18, filers: "Campbell, Healey", topDonor: "Levi Reilly (Housing Commission)", type: "Developer" },
            { firm: "Commodore Builders", total: 14750, donations: 30, filers: "Campbell, Healey", topDonor: "Joe Albanese (CEO)", type: "Builder" },
            { firm: "Kraft Group", total: 14000, donations: 14, filers: "Campbell, Healey", topDonor: "Jonathan Kraft", type: "Properties" },
            { firm: "Compass (RE)", total: 13645, donations: 35, filers: "Campbell, Healey", topDonor: "RE brokers/agents", type: "CRE Brokerage" },
            { firm: "AECOM", total: 13175, donations: 27, filers: "Crighton, Healey", topDonor: "Engineering/planning firm", type: "Engineering" },
            { firm: "City Realty", total: 12500, donations: 17, filers: "Campbell, Healey, Honan", topDonor: "Steve Whalen (Founder)", type: "Developer" },
            { firm: "New England Development", total: 11500, donations: 15, filers: "Campbell, Healey, Honan", topDonor: "Doug Karp (Chairman/CEO)", type: "Developer" },
            { firm: "Beacon Residential", total: 11525, donations: 13, filers: "Campbell, Healey", topDonor: "Howard Cohen (Chairman)", type: "Property Mgmt" },
            { firm: "Samuels & Associates", total: 9000, donations: 14, filers: "Crighton, Healey", topDonor: "Abe Menzin, Joel Sklar", type: "Developer" },
            { firm: "Wingate", total: 9000, donations: 9, filers: "Campbell, Healey", topDonor: "Gerald/Mark Schuster", type: "Developer" },
            { firm: "Paradigm Properties", total: 8750, donations: 12, filers: "Campbell, Healey", topDonor: "Kevin McCall", type: "Property Mgmt" },
            { firm: "CBRE", total: 8350, donations: 17, filers: "Campbell, Healey", topDonor: "CRE brokers", type: "CRE Brokerage" },
            { firm: "Finegold Alexander", total: 8325, donations: 21, filers: "Campbell, Healey", topDonor: "Architects — every rezoning = work", type: "Architecture" },
            { firm: "Chestnut Hill Realty", total: 8610, donations: 11, filers: "Campbell, Healey, Honan", topDonor: "Edward Zuker (CEO)", type: "Developer" },
            { firm: "Mark Development", total: 8200, donations: 9, filers: "Campbell, Healey", topDonor: "Robert Korff (Owner)", type: "Developer" },
            { firm: "Maloney Properties", total: 8150, donations: 17, filers: "Campbell, Healey", topDonor: "Diana Kelly (CEO)", type: "Property Mgmt" },
            { firm: "RISE", total: 7950, donations: 11, filers: "Campbell, Healey", topDonor: "Dev & construction", type: "Builder" },
            { firm: "Sandra Edgerley", total: 7833, donations: 8, filers: "Campbell, Healey", topDonor: "Individual RE developer", type: "Developer" },
            { firm: "Fallon Company", total: 7700, donations: 12, filers: "Campbell, Healey", topDonor: "Joseph Fallon (CEO)", type: "Developer" },
            { firm: "Winn Companies", total: 7400, donations: 9, filers: "Campbell, Healey", topDonor: "Arthur/Gilbert Winn", type: "Property Mgmt" },
            { firm: "Boylston Properties", total: 6000, donations: 7, filers: "Campbell, Healey", topDonor: "William McQuillan", type: "Developer" },
            { firm: "Carpenter & Co", total: 6000, donations: 6, filers: "Healey", topDonor: "Richard Friedman — legendary dev", type: "Developer" },
            { firm: "Cronin Development", total: 6000, donations: 6, filers: "Campbell, Healey", topDonor: "Jon Cronin (Principal)", type: "Developer" },
            { firm: "Brait Builders", total: 6000, donations: 6, filers: "Healey", topDonor: "Robert Brait", type: "Builder" },
            { firm: "Keith Construction", total: 6500, donations: 10, filers: "Healey, Honan", topDonor: "John Keith (President)", type: "Builder" },
            { firm: "Dellbrook Construction", total: 6100, donations: 12, filers: "Healey, Honan", topDonor: "Michael Fish (CEO)", type: "Builder" },
          ];

          const typeColors = { Developer: "#dc2626", Builder: "#f59e0b", "CRE Brokerage": "#7c3aed", "Property Mgmt": "#2563eb", Engineering: "#06b6d4", Architecture: "#10b981", Properties: "#8b5cf6" };

          const filteredDevs = devFilter === "all" ? developerDonors : developerDonors.filter(d => d.type === devFilter);
          const devTypes = [...new Set(developerDonors.map(d => d.type))];
          const totalDevMoney = developerDonors.reduce((s, d) => s + d.total, 0);
          const totalDevDonations = developerDonors.reduce((s, d) => s + d.donations, 0);

          const webSteps = [
            { title: "Step 1: The Law", text: "Governor Baker signs § 3A into law (January 2021), mandating 177 towns rezone for multifamily housing near MBTA. No affordability requirements. No construction mandate. Just zoning.", node: "Baker → § 3A", color: "#f59e0b" },
            { title: "Step 2: The Exit", text: "Baker leaves office. Joins Dewey Square Group — the lobbying firm that would later run Governor Healey's dark-money nonprofit 'One Commonwealth.' His former Housing Secretary Gregory Bialecki joins Redgate — a real estate development firm.", node: "Baker → DSG / Bialecki → Redgate", color: "#dc2626" },
            { title: "Step 3: The Money Machine", text: "Barr Foundation gives $1M+ to MHP for § 3A compliance work. $500K to Abundant Housing MA for advocacy. CHAPA — stacked with developers (Bigby, Kovel, Korb) — lobbies for enforcement. The compliance industry is born.", node: "Barr → MHP → CHAPA → Compliance $$$", color: "#059669" },
            { title: "Step 4: The Enforcement", text: "Governor Healey creates EOHLC, issues compliance guidelines. AG Campbell gains enforcement power via SJC Milton decision (Jan 2025). NAIOP files amicus brief (via Sullivan & Worcester) arguing for AG authority. Towns face loss of state funding for non-compliance.", node: "Healey + Campbell = Enforcement", color: "#7c3aed" },
            { title: "Step 5: The Donations", text: "Now trace the money: Developers who profit from § 3A donate $600K+ to these 4 officials. Lobbying firms donate $600K+. Barr Foundation leaders donate $16K directly. CHAPA board members donate $47K+. Baker donates from DSG to Crighton and Campbell. The money flows in circles.", node: "$$$ → Officials → Policy → $$$", color: "#dc2626" },
            { title: "Step 6: The Commissions", text: "Healey appoints to her Housing Commission: Levi Reilly (Marcus Partners, $15K+ in donations), David Linhart (Goulston & Storrs, commission member AND partner at RE law firm), Tamara Small (NAIOP CEO who lobbied for enforcement). The policy-makers ARE the beneficiaries.", node: "Developers ↔ Commissions ↔ Policy", color: "#f59e0b" },
            { title: "Step 7: The Question", text: "A law signed by a governor who now works for a lobbying firm. Shaped by a housing secretary who's now a developer. Enforced by an AG funded by the development industry. Implemented by commissions stacked with developers. Compliance funded by a foundation whose leaders donate to the enforcers. 177 towns pay. Developers profit. Is this housing policy — or something else?", node: "177 Towns Pay → Developers Profit", color: "#dc2626" },
          ];

          const lobbyFirms = [
            { firm: "Dewey Square Group", salaries: "$2.7M", years: "2019–2026", donations: "$42K+ to all 4 officials", client: "MA Affordable Housing Alliance ($30K/yr)", connection: "Runs Healey's 'One Commonwealth' dark-money nonprofit. Baker joined after signing 3A. Whouley donates $3K+ to Campbell, $8K+ to Healey." },
            { firm: "Smith Costello & Crawford", salaries: "N/A (govt affairs)", years: "2016–2025", donations: "$32K coordinated", client: "N/A — lobbying/govt affairs", connection: "Textbook bundling: every partner donates $200 to same candidate on same date. $9,400 to Crighton alone (16% of his lobbying money)." },
            { firm: "Issues Management Group", salaries: "$5.2M", years: "2022–2026", donations: "$6K+ identified", client: "Construction Industries of MA ($84K/yr)", connection: "Employees donate coordinated $200 each to all 4 officials. Maureen Glynn ($300K/yr salary) → regular donor." },
            { firm: "Goulston & Storrs", salaries: "N/A (law firm)", years: "Active", donations: "$50K+ to Healey & Campbell", client: "Real estate practice", connection: "David Linhart: partner AND Healey Commission member. 160+ attorney donations. Hosted NAIOP events with Lt. Gov. Driscoll." },
            { firm: "O'Neill & Associates", salaries: "$23K+ identified", years: "Active", donations: "$23K+ to all 4 officials", client: "Government relations", connection: "Ben Josephson (COO/Lobbyist), multiple VPs donate across all officials." },
            { firm: "NAIOP (via Sullivan & Worcester)", salaries: "$30K (S&W 2022)", years: "2022", donations: "$4K+ PAC + staff", client: "Filed amicus brief in Milton case", connection: "CEO Tamara Small on Healey's Commission. Filed brief arguing AG should have enforcement power over towns. Then NAIOP PAC donates to AG." },
          ];

          return (
          <div>
            <SectionHead num="06" title="The Money Trail" subtitle="107,862 OCPF records · 21 lobbying filings · Follow the connections" />

            {/* HEADLINE COUNTERS */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
              {[
                { val: "$30.9M", label: "Total raised by 4 officials", color: "#f59e0b" },
                { val: "$1.26M", label: "From RE/developer industry", color: "#dc2626" },
                { val: "$597K", label: "From lobbying firms", color: "#7c3aed" },
                { val: "$42.7K", label: "From housing org leaders", color: "#059669" },
              ].map((c, i) => (
                <div key={i} style={{ textAlign: "center", padding: "14px 8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2 }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: c.color, fontFamily: "'Playfair Display', Georgia, serif" }}>{c.val}</div>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{c.label}</div>
                </div>
              ))}
            </div>

            {/* SECTION TABS */}
            <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              {sections.map(s => (
                <button key={s.id} onClick={() => setActiveSection(s.id)} style={{
                  background: "none", border: "none", padding: "10px 20px", cursor: "pointer",
                  fontSize: 13, fontWeight: activeSection === s.id ? 700 : 400, fontFamily: "inherit",
                  color: activeSection === s.id ? "#f59e0b" : "#64748b",
                  borderBottom: activeSection === s.id ? "2px solid #f59e0b" : "2px solid transparent",
                  transition: "all 0.15s",
                }}>{s.icon} {s.label}</button>
              ))}
            </div>

            {/* ===== SMOKING GUNS ===== */}
            {activeSection === "guns" && (
              <div>
                <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>Click any card to reveal the full evidence trail.</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
                  {smokingGuns.map((gun) => (
                    <div key={gun.id} onClick={() => setExpandedGun(expandedGun === gun.id ? null : gun.id)}
                      style={{
                        background: expandedGun === gun.id ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)",
                        border: `1px solid ${expandedGun === gun.id ? gun.color + "66" : "rgba(255,255,255,0.06)"}`,
                        borderRadius: 2, padding: 16, cursor: "pointer",
                        transition: "all 0.2s",
                      }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: gun.color, lineHeight: 1.3, flex: 1, paddingRight: 12 }}>{gun.headline}</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#f8fafc", whiteSpace: "nowrap", background: "rgba(255,255,255,0.06)", padding: "3px 8px", borderRadius: 2 }}>{gun.amount}</div>
                      </div>
                      <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5 }}>{gun.short}</div>
                      {expandedGun === gun.id && (
                        <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${gun.color}33`, fontSize: 12, color: "#cbd5e1", lineHeight: 1.7 }}>
                          {gun.detail}
                        </div>
                      )}
                      <div style={{ marginTop: 8, fontSize: 10, color: expandedGun === gun.id ? gun.color : "#475569" }}>
                        {expandedGun === gun.id ? "▲ Click to collapse" : "▼ Click for evidence"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ===== DEVELOPER $$$ ===== */}
            {activeSection === "devs" && (
              <div>
                {/* Summary bar */}
                <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
                  <div style={{ fontSize: 13, color: "#f8fafc" }}>
                    <strong style={{ color: "#f59e0b" }}>{filteredDevs.length}</strong> firms · <strong style={{ color: "#dc2626" }}>${(filteredDevs.reduce((s,d) => s+d.total, 0)/1000).toFixed(0)}K</strong> total · <strong>{filteredDevs.reduce((s,d) => s+d.donations, 0).toLocaleString()}</strong> donations
                  </div>
                </div>

                {/* Filter chips */}
                <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
                  <button onClick={() => setDevFilter("all")} style={{
                    background: devFilter === "all" ? "#f59e0b" : "rgba(255,255,255,0.05)",
                    color: devFilter === "all" ? "#0f172a" : "#94a3b8",
                    border: "none", borderRadius: 2, padding: "5px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                  }}>All ({developerDonors.length})</button>
                  {devTypes.map(t => {
                    const count = developerDonors.filter(d => d.type === t).length;
                    return (
                      <button key={t} onClick={() => setDevFilter(t)} style={{
                        background: devFilter === t ? (typeColors[t] || "#f59e0b") : "rgba(255,255,255,0.05)",
                        color: devFilter === t ? "#fff" : "#94a3b8",
                        border: "none", borderRadius: 2, padding: "5px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                      }}>{t} ({count})</button>
                    );
                  })}
                </div>

                {/* Developer table */}
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                    <thead><tr style={{ background: "rgba(245,158,11,0.08)" }}>
                      <th style={{ padding: "8px 10px", textAlign: "left", color: "#fbbf24", fontWeight: 600 }}>Firm</th>
                      <th style={{ padding: "8px 10px", textAlign: "left", color: "#fbbf24" }}>Type</th>
                      <th style={{ padding: "8px 10px", textAlign: "right", color: "#fbbf24" }}>Total</th>
                      <th style={{ padding: "8px 10px", textAlign: "right", color: "#fbbf24" }}>#</th>
                      <th style={{ padding: "8px 10px", textAlign: "left", color: "#fbbf24" }}>Recipients</th>
                      <th style={{ padding: "8px 10px", textAlign: "left", color: "#fbbf24" }}>Key Donor / Note</th>
                    </tr></thead>
                    <tbody>{filteredDevs.map((d, i) => (
                      <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: d.topDonor.includes("🚨") ? "rgba(245,158,11,0.05)" : "transparent" }}>
                        <td style={{ padding: "6px 10px", color: "#e2e8f0", fontWeight: 600, fontSize: 11 }}>{d.firm}</td>
                        <td style={{ padding: "6px 10px" }}>
                          <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 2, background: (typeColors[d.type] || "#666") + "22", color: typeColors[d.type] || "#999", fontWeight: 600 }}>{d.type}</span>
                        </td>
                        <td style={{ padding: "6px 10px", textAlign: "right", fontWeight: 700, color: "#f59e0b" }}>${(d.total/1000).toFixed(1)}K</td>
                        <td style={{ padding: "6px 10px", textAlign: "right", color: "#64748b" }}>{d.donations}</td>
                        <td style={{ padding: "6px 10px", color: d.filers === "ALL FOUR" ? "#f59e0b" : "#94a3b8", fontSize: 11, fontWeight: d.filers === "ALL FOUR" ? 700 : 400 }}>{d.filers}</td>
                        <td style={{ padding: "6px 10px", color: "#64748b", fontSize: 10 }}>{d.topDonor}</td>
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
                <div style={{ marginTop: 8, fontSize: 11, color: "#475569" }}>
                  Total developer/builder/RE money to 4 key officials: <strong style={{ color: "#dc2626" }}>${(totalDevMoney/1000).toFixed(0)}K</strong> across <strong>{totalDevDonations.toLocaleString()}</strong> donations from <strong>{developerDonors.length}</strong> firms identified.
                </div>
              </div>
            )}

            {/* ===== LOBBY FIRMS ===== */}
            {activeSection === "lobby" && (
              <div>
                <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>Lobbying registration data from Secretary of the Commonwealth. Click any firm for details.</div>
                {lobbyFirms.map((lf, i) => (
                  <div key={i} onClick={() => setExpandedLobby(expandedLobby === i ? null : i)} style={{
                    background: expandedLobby === i ? "rgba(124,58,237,0.06)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${expandedLobby === i ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.06)"}`,
                    borderRadius: 2, padding: 16, marginBottom: 8, cursor: "pointer", transition: "all 0.15s",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <span style={{ fontSize: 14, fontWeight: 700, color: "#f8fafc" }}>{lf.firm}</span>
                        <span style={{ fontSize: 11, color: "#64748b", marginLeft: 12 }}>{lf.years}</span>
                      </div>
                      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        <div style={{ fontSize: 12, color: "#a78bfa", fontWeight: 600 }}>{lf.donations}</div>
                        <div style={{ fontSize: 11, color: "#64748b", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 2 }}>Salaries: {lf.salaries}</div>
                        <div style={{ fontSize: 10, color: "#475569" }}>{expandedLobby === i ? "▲" : "▼"}</div>
                      </div>
                    </div>
                    {expandedLobby === i && (
                      <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(124,58,237,0.15)" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 8 }}>
                          <div><span style={{ fontSize: 10, color: "#7c3aed", fontWeight: 600 }}>KEY CLIENT</span><div style={{ fontSize: 12, color: "#e2e8f0", marginTop: 2 }}>{lf.client}</div></div>
                          <div><span style={{ fontSize: 10, color: "#7c3aed", fontWeight: 600 }}>DONATIONS</span><div style={{ fontSize: 12, color: "#e2e8f0", marginTop: 2 }}>{lf.donations}</div></div>
                        </div>
                        <div><span style={{ fontSize: 10, color: "#7c3aed", fontWeight: 600 }}>§ 3A CONNECTION</span><div style={{ fontSize: 12, color: "#cbd5e1", marginTop: 2, lineHeight: 1.6 }}>{lf.connection}</div></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ===== THE WEB ===== */}
            {activeSection === "web" && (
              <div>
                <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>Step through the connections. Each step reveals another layer.</div>

                {/* Step indicator */}
                <div style={{ display: "flex", gap: 4, marginBottom: 20, alignItems: "center" }}>
                  {webSteps.map((_, i) => (
                    <div key={i} onClick={() => setWebStep(i)} style={{
                      width: i <= webStep ? 40 : 24, height: 6, borderRadius: 3, cursor: "pointer", transition: "all 0.3s",
                      background: i <= webStep ? webSteps[i].color : "rgba(255,255,255,0.08)",
                    }} />
                  ))}
                  <span style={{ fontSize: 11, color: "#64748b", marginLeft: 8 }}>{webStep + 1} / {webSteps.length}</span>
                </div>

                {/* Steps */}
                <div style={{ position: "relative" }}>
                  {webSteps.map((step, i) => i <= webStep && (
                    <div key={i} style={{
                      marginBottom: 16, padding: 20,
                      background: i === webStep ? `${step.color}11` : "rgba(255,255,255,0.02)",
                      border: `1px solid ${i === webStep ? step.color + "44" : "rgba(255,255,255,0.04)"}`,
                      borderRadius: 2, transition: "all 0.3s",
                      borderLeft: `3px solid ${step.color}`,
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: step.color }}>{step.title}</div>
                        <div style={{ fontSize: 10, color: step.color, background: step.color + "15", padding: "3px 10px", borderRadius: 2, fontWeight: 600, whiteSpace: "nowrap" }}>{step.node}</div>
                      </div>
                      <div style={{ fontSize: 13, color: i === webStep ? "#e2e8f0" : "#94a3b8", lineHeight: 1.7 }}>{step.text}</div>
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16 }}>
                  <button onClick={() => setWebStep(Math.max(0, webStep - 1))} disabled={webStep === 0} style={{
                    background: webStep > 0 ? "rgba(255,255,255,0.05)" : "transparent",
                    color: webStep > 0 ? "#f8fafc" : "#334155", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 2, padding: "8px 20px", fontSize: 12, cursor: webStep > 0 ? "pointer" : "default", fontFamily: "inherit",
                  }}>← Back</button>
                  <button onClick={() => setWebStep(Math.min(webSteps.length - 1, webStep + 1))} disabled={webStep === webSteps.length - 1} style={{
                    background: webStep < webSteps.length - 1 ? "#f59e0b" : "transparent",
                    color: webStep < webSteps.length - 1 ? "#0f172a" : "#334155", border: "1px solid rgba(245,158,11,0.3)",
                    borderRadius: 2, padding: "8px 20px", fontSize: 12, fontWeight: 700, cursor: webStep < webSteps.length - 1 ? "pointer" : "default", fontFamily: "inherit",
                  }}>{webStep < webSteps.length - 1 ? "Next Step →" : "End"}</button>
                  {webStep < webSteps.length - 1 && (
                    <button onClick={() => setWebStep(webSteps.length - 1)} style={{
                      background: "transparent", color: "#64748b", border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 2, padding: "8px 14px", fontSize: 11, cursor: "pointer", fontFamily: "inherit",
                    }}>Show All</button>
                  )}
                </div>
              </div>
            )}

            {/* SOURCES */}
            <div style={{ marginTop: 28, fontSize: 10, color: "#475569", lineHeight: 1.5 }}>
              <strong>Sources:</strong> Massachusetts OCPF public records (107,862 records) · Secretary of the Commonwealth Lobbyist Public Search · 
              Dewey Square Group registration filings 2019–2026 · Issues Management Group filings 2022–2026 · Sullivan & Worcester filing 2022 · 
              Pierce Atwood filings 2019–2026 · All donations are public filings verified through OCPF.
            </div>
          </div>
          );
        })()}

        {/* ===== THE QUESTION TAB ===== */}
        {tab === "The Question" && (
          <div>
            <SectionHead num="07" title="The Question Nobody's Asking" subtitle="A Socratic exercise in following the logic to its conclusion" />

            <div style={{ maxWidth: 740 }}>
              <div style={{ fontSize: 15, color: "#e2e8f0", lineHeight: 1.8, marginBottom: 28 }}>
                <p style={{ marginBottom: 16 }}>
                  <strong style={{ color: "#f59e0b" }}>If the problem is affordability</strong> — and every data point confirms it is — then the question is:
                  does forcing 177 towns to rezone for 297,190 theoretical multifamily units make housing more affordable?
                </p>
                <p style={{ marginBottom: 16 }}>
                  The answer requires examining what actually gets built when you rezone for multifamily. New multifamily construction in Massachusetts 
                  costs $350+ per square foot. A 900sf unit costs $315,000+ to <em>build</em> — before land, financing, permits, or profit margin. 
                  These are not affordable units. They are market-rate units priced at $2,500–$4,000/month in rent, or $500K+ for purchase.
                </p>
                <p style={{ marginBottom: 16 }}>
                  <strong style={{ color: "#f59e0b" }}>The law contains no affordability requirement.</strong> There is no mandate for below-market units, 
                  no income targeting, no rent stabilization. It requires zoning for multifamily "as of right" — meaning developers can build what the 
                  market will bear, which in Greater Boston means luxury and market-rate product.
                </p>
                <p style={{ marginBottom: 16 }}>
                  Meanwhile, the real-world obstacles to housing production remain untouched: interest rates above 6%, construction costs up 40%+ since 2020, 
                  labor shortages in the trades, and a capital markets environment where multifamily deals pencil only in the most premium locations. 
                  Permits are down 44% from 2021. The market is <em>frozen</em> — and it's not frozen because of zoning.
                </p>
              </div>

              <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 2, padding: 24, marginBottom: 28 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fbbf24", marginBottom: 16, fontFamily: "'Playfair Display', Georgia, serif" }}>
                  The Logical Chain
                </div>
                {[
                  { q: "What does the law require?", a: "Zoning changes — not construction." },
                  { q: "Does rezoning create housing?", a: "No. Capital, labor, and market demand create housing." },
                  { q: "Will the rezoned units be affordable?", a: "No affordability mandate exists in § 3A." },
                  { q: "What does new multifamily cost to build?", a: "$350+ psf. A 900sf unit = $315K+ construction cost alone." },
                  { q: "Is the market building?", a: "Permits down 44%. Interest rates 6%+. Market is frozen." },
                  { q: "Who pays for compliance?", a: "Towns. $4.49B in designer fees. State appropriated $15M (0.3%)." },
                  { q: "What happens if towns don't comply?", a: "They lose state infrastructure funding they already need." },
                  { q: "So what does the law actually accomplish?", a: "It transfers zoning control from towns to the state — and shifts liability for future development costs to municipalities." },
                ].map((item, i) => (
                  <div key={i} style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#f59e0b" }}>{item.q}</div>
                    <div style={{ fontSize: 13, color: "#e2e8f0", marginTop: 2, paddingLeft: 16, borderLeft: "2px solid rgba(245,158,11,0.3)" }}>{item.a}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2, padding: 24, marginBottom: 28 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#f8fafc", marginBottom: 12, fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Marblehead: A Case Study
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 16 }}>
                  <StatCard label="Category" value="Adjacent" sub="No MBTA station" accent="#7c3aed" />
                  <StatCard label="Required Capacity" value="897" sub="10% of 8,965 housing units" accent="#f59e0b" />
                  <StatCard label="Est. Designer Fees" value={`$${(897 * 900 * 250 * 0.059 / 1e6).toFixed(1)}M`} sub="Before infrastructure" accent="#dc2626" />
                </div>
                <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>
                  Marblehead is classified as an "Adjacent community" — it has no MBTA station. It must zone for 897 multifamily units 
                  at 15 units/acre minimum density. The town has no sewer system in many areas, relies on well water, and has 
                  significant wetlands constraints. The minimum land area requirement is 27 acres. The estimated designer fees alone 
                  for the required theoretical buildout: ${(897 * 900 * 250 * 0.059 / 1e6).toFixed(1)}M — and the state 
                  has provided $0 in direct support to Marblehead for compliance.
                </div>
              </div>

              <div style={{
                textAlign: "center",
                padding: "32px 24px",
                background: "linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(220,38,38,0.05) 100%)",
                border: "1px solid rgba(245,158,11,0.15)",
                borderRadius: 2,
              }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#fbbf24", fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 12 }}>
                  The Socratic Conclusion
                </div>
                <div style={{ fontSize: 14, color: "#e2e8f0", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                  A law that mandates zoning but not construction, requires no affordable units, shifts billions in costs to municipalities, 
                  strips local control, and operates in a frozen market — does not solve a housing affordability crisis.
                  <br /><br />
                  It <em>does</em> accomplish a permanent transfer of zoning authority from 177 towns to the state.
                  <br /><br />
                  <span style={{ color: "#f59e0b", fontWeight: 600 }}>The question is whether that was the purpose all along.</span>
                </div>
              </div>

              <div style={{ marginTop: 24, fontSize: 11, color: "#475569", lineHeight: 1.6 }}>
                <strong>Sources:</strong> MGL c. 40A § 3A · 760 CMR 72.00 · EOHLC Compliance Model v1.5 (Aug 2024) · 
                Brensley Cost Impact Report (Dec 2025) · DCAMM Cost Estimating Manual · EOHLC Community Categories & 
                Capacity Calculations (Jun 2025) · Plymouth Superior Court Decision (Jun 2025) · SJC Milton Decision (Jan 2025) · 
                Census 2020 PL-94 · MA Housing Permit Data · Boston Foundation Housing Report Card 2025 · 
                Massachusetts Data Hub (duncanburns2013-dot.github.io)
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
