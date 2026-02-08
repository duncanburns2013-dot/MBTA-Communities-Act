# 💰 Follow the Money: Massachusetts MBTA Communities Act (§ 3A)

**An open-source investigation into the political money flows behind Massachusetts' most controversial housing mandate.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Data: OCPF](https://img.shields.io/badge/Data-MA%20OCPF-blue)](https://www.ocpf.us/)
[![Data: ProPublica](https://img.shields.io/badge/Data-ProPublica%20Nonprofit%20Explorer-red)](https://projects.propublica.org/nonprofits/)

---

## What Is This?

An interactive React dashboard that traces campaign finance data, lobbying connections, revolving-door relationships, and dark-money nonprofit activity surrounding Massachusetts' MBTA Communities Act — a state mandate requiring 177 cities and towns to rezone for multifamily housing near transit, with **no affordability requirements** and an estimated **$4.4 billion in unfunded costs** pushed onto local taxpayers.

Every claim is sourced from public records. Where a claim relies on analysis of raw data (e.g., OCPF donation totals), the methodology and raw files are included in this repository.

**[🔗 View the live dashboard →](https://duncanburns2013-dot.github.io/MBTA-Communities-Act/)**

---

## Key Findings

### 🏗️ The Money Loop
- **$600K+** from developers/builders to the 4 officials who created and enforce § 3A — *Source: [MA OCPF](https://www.ocpf.us/) filings, aggregated from individual donor records. Raw data and analysis included in `/data` folder.*
- **$600K+** from lobbying firms to those same officials — *Source: Same OCPF analysis.*
- **$1.9 billion** Barr Foundation funds the compliance apparatus; its leaders max-donate to enforcers — *Source: [ProPublica Nonprofit Explorer, EIN 04-6579815](https://projects.propublica.org/nonprofits/organizations/46579815), IRS Form 990.*
- One Commonwealth, Healey's dark-money 501(c)(4), ran **ad campaigns targeting towns** on § 3A compliance — donors undisclosed. Total revenue/expenses ~$748K. — *Source: [ProPublica, EIN 99-2551833](https://projects.propublica.org/nonprofits/organizations/992551833); [WBUR, Dec 18, 2025](https://www.wbur.org/news/2025/12/18/draftkings-healey-massachusetts-political-nonprofit); [Boston Globe, May 16, 2024](https://www.bostonglobe.com/2024/05/16/business/healey-housing-politics-advocacy/); [Banker & Tradesman, Sep 23, 2025](https://bankerandtradesman.com/healey-driscoll-housing-nonprofit-launches-ad-campaign/).*

### 🚪 The Revolving Door
Three consecutive Massachusetts Housing & Economic Development Secretaries — across the Patrick and Baker administrations — left government for the development industry:
  - **Gregory Bialecki** (Patrick administration, 2009–2015) → Redgate, a RE development firm. His work "helped pave the way for...the MBTA Communities Act." — *Source: [PRNewswire, Apr 16, 2015](https://www.prnewswire.com/news-releases/greg-bialecki-joins-redgate-300067398.html); [Wikipedia](https://en.wikipedia.org/wiki/Greg_Bialecki); [MassINC remembrance, Nov 26, 2024](https://massinc.org/2024/11/26/greg-bialecki-a-remembrance/).*
  - **Jay Ash** (Baker administration, 2015–2018) → CEO of Massachusetts Competitive Partnership (MACP), whose board includes John Fish, CEO of Suffolk Construction — *Source: [BusinessWire, Dec 20, 2018](https://www.businesswire.com/news/home/20181220005717/en/Massachusetts-Competitive-Partnership-Names-Jay-Ash-CEO); [MACP website](https://www.masscompetes.org/about-us).*
  - **Mike Kennealy** (Baker administration, 2018–2022) → Now running for governor as a Republican to "fix" the law he helped craft, self-funded ~$2M in loans that exceed the $200K/cycle state limit — *Source: [Boston Herald, Jun 25, 2025](https://www.bostonherald.com/2025/06/25/gops-mike-kennealy-has-loaned-his-campaign-double-the-amount-allowed-under-state-law/); [Boston Herald, Oct 7, 2025](https://www.bostonherald.com/2025/10/07/mike-kennealy-plans-to-continue-ignoring-mass-loan-limit-law-lawyer-tells-regulators/). OCPF sent audit letters demanding reclassification; Kennealy's DC lawyer Chris Ashby said the campaign does not plan to comply.*
- **Brian Shortsleeve** ran Baker's MBTA → now runs for governor promising to repeal § 3A → but OCPF records show he donated $2,000 to AG Campbell (who enforces § 3A against non-compliant towns) in 2021–22 — *Source: [Boston.com](https://www.boston.com/); OCPF filings.*

### 👨‍👩‍👧‍👦 The Fish Construction Dynasty
One family controls three companies (Suffolk Construction, Peabody Properties, Dellbrook|JKS) and donates **$100K+** to officials on **both sides** of the § 3A debate:
- Democrats who enforce it ✓
- Republicans who promise to repeal it ✓
- **103 donors** gave money to both Republican gubernatorial candidates (Kennealy and Shortsleeve)

*Source: OCPF filings cross-referenced across all candidate committees. Fish family company connections per [NEREJ obituary for Edward Fish](https://nerej.com/), founder of Dellbrook Construction and father of John Fish (Suffolk) and Karen Fish-Will (Peabody Properties). Analysis methodology and raw data in `/data` folder.*

### 🏛️ The Commission Stacking
Healey's "Unlocking Housing Production" Commission includes:
- Developers who donate to her campaign
- Lobbyists whose firms profit from § 3A compliance
- Lawyers whose practices depend on RE transactions the law enables

*Source: [Commission membership list (Mass.gov)](https://www.mass.gov/); cross-referenced with OCPF donation records.*

### 📋 Two Charlie Bakers
OCPF records show donations from "Charles Baker / Dewey Square Group" — this is **not** the former governor. DSG's co-founder Charlie Baker (Harvard '80, BU Law '84) is a lifelong Democratic operative who served as a deputy to Gov. Dukakis and as Chief Administrative Officer for Hillary Clinton's 2016 campaign. Governor Charlie Baker (Harvard '79, Northwestern MBA, Republican) became [NCAA president in March 2023](https://www.ncaa.org/sports/2023/3/1/ncaa-president-charlie-baker.aspx). DSG's Lynda Tocci serves as president of One Commonwealth. DSG's Baker donates to officials who enforce § 3A.

*Source: [Dewey Square Group website](https://www.deweysquare.com/team/charlie-baker/); [Governor Baker Wikipedia](https://en.wikipedia.org/wiki/Charlie_Baker); [WBUR on One Commonwealth/Tocci/DSG, Dec 18, 2025](https://www.wbur.org/news/2025/12/18/draftkings-healey-massachusetts-political-nonprofit).*

---

## Source Index

Every major claim maps to one or more of these sources:

| # | Claim | Primary Source | Backup Source |
|---|-------|---------------|---------------|
| 1 | § 3A requires 177 towns to rezone | [Mass.gov EOHLC](https://www.mass.gov/info-details/mbta-communities) | [WBUR explainer](https://www.wbur.org/news/2024/05/09/mbta-communities-act-zoning-map) |
| 2 | No affordability requirements | [Mass.gov: "does not require development"](https://www.mass.gov/info-details/mbta-communities) | [WBUR: law requires zoning, not affordable units](https://www.wbur.org/news/2024/05/09/mbta-communities-act-zoning-map) |
| 3 | $4.4B unfunded costs estimate | Research by [@AnneBrensleyMA](https://twitter.com/AnneBrensleyMA) prepared for State Auditor | Cited in [@islantstudio's post](https://twitter.com/islantstudio) |
| 4 | Developer/builder donations to officials | [MA OCPF public records](https://www.ocpf.us/) | Raw CSVs in `/data` |
| 5 | Lobbying firm donations | [MA OCPF](https://www.ocpf.us/) | Raw CSVs in `/data` |
| 6 | Barr Foundation: $1.9B assets, $136M disbursements | [ProPublica 990, EIN 04-6579815](https://projects.propublica.org/nonprofits/organizations/46579815) | IRS Form 990 |
| 7 | Barr CEO salary $803K | Same ProPublica 990 | James Canales, $803,488 + $51,909 benefits |
| 8 | One Commonwealth: 501(c)(4), $748K revenue | [ProPublica 990, EIN 99-2551833](https://projects.propublica.org/nonprofits/organizations/992551833) | Schedule L conflict of interest filed |
| 9 | One Commonwealth ran § 3A ad campaigns | [WBUR, Dec 2025](https://www.wbur.org/news/2025/12/18/draftkings-healey-massachusetts-political-nonprofit) | [Boston Globe, May 2024](https://www.bostonglobe.com/2024/05/16/business/healey-housing-politics-advocacy/); [B&T, Sep 2025](https://bankerandtradesman.com/healey-driscoll-housing-nonprofit-launches-ad-campaign/) |
| 10 | DraftKings donated to One Commonwealth | [WBUR, Dec 2025](https://www.wbur.org/news/2025/12/18/draftkings-healey-massachusetts-political-nonprofit) | MA Gaming Commission disclosure |
| 11 | Lynda Tocci: Healey advisor → DSG → One Commonwealth pres. | [WBUR, Dec 2025](https://www.wbur.org/news/2025/12/18/draftkings-healey-massachusetts-political-nonprofit) | [Boston Globe, May 2024](https://www.bostonglobe.com/2024/05/16/business/healey-housing-politics-advocacy/) |
| 12 | Bialecki: Patrick Housing Sec (2009–2015) → Redgate | [PRNewswire, Apr 2015](https://www.prnewswire.com/news-releases/greg-bialecki-joins-redgate-300067398.html) | [Wikipedia](https://en.wikipedia.org/wiki/Greg_Bialecki) |
| 13 | Jay Ash: Baker Housing Sec → MACP CEO | [BusinessWire, Dec 2018](https://www.businesswire.com/news/home/20181220005717/en/Massachusetts-Competitive-Partnership-Names-Jay-Ash-CEO) | [SHNS, Aug 2024](https://www.statehousenews.com/news/economy/q-a-shns-talks-with-mass-competitive-partnership-ceo-jay-ash/article_99d3dbd8-663b-11ef-b40e-9f8e8e7ded03.html) |
| 14 | MACP board includes John Fish (Suffolk Construction) | [MACP website](https://www.masscompetes.org/about-us) | BusinessWire 2018 announcement |
| 15 | Kennealy "helped craft" § 3A | [Boston Herald, Jan 2, 2025](https://www.bostonherald.com/) | [Mass.gov Housing Choice event, Sep 2019](https://www.mass.gov/news/former-economic-development-secretaries-endorse-baker-polito-administrations-housing-choice-legislation) |
| 16 | Kennealy ~$2M in loans exceeding $200K/cycle limit | [Boston Herald, Jun 2025](https://www.bostonherald.com/2025/06/25/gops-mike-kennealy-has-loaned-his-campaign-double-the-amount-allowed-under-state-law/) | [Boston Herald, Oct 2025](https://www.bostonherald.com/2025/10/07/mike-kennealy-plans-to-continue-ignoring-mass-loan-limit-law-lawyer-tells-regulators/) |
| 17 | OCPF demanded reclassification; lawyer refused | [Boston Herald, Oct 2025](https://www.bostonherald.com/2025/10/07/mike-kennealy-plans-to-continue-ignoring-mass-loan-limit-law-lawyer-tells-regulators/) | Chris Ashby letter to OCPF General Counsel |
| 18 | Shortsleeve donated $2K to AG Campbell | [Boston.com](https://www.boston.com/) | OCPF filings |
| 19 | Fish family: Suffolk / Peabody Properties / Dellbrook | [NEREJ Edward Fish obituary](https://nerej.com/) | OCPF employer field cross-reference |
| 20 | 103 shared donors: Kennealy & Shortsleeve | OCPF cross-reference analysis | Raw data in `/data` |
| 21 | Gov. Baker → NCAA president (Mar 2023) | [NCAA.org](https://www.ncaa.org/news/2022/12/15/media-center-ncaa-announces-governor-charlie-baker-to-be-next-president.aspx) | [ESPN, Dec 2022](https://www.espn.com/college-sports/story/_/id/35258190/massachusetts-gov-charlie-baker-ncaa-next-president) |
| 22 | DSG co-founder Charlie Baker ≠ Governor | [DSG website](https://www.deweysquare.com/team/charlie-baker/) | Harvard '80 vs. Harvard '79 |
| 23 | Bialecki's work "paved the way" for § 3A | [MassINC, Nov 2024](https://massinc.org/2024/11/26/greg-bialecki-a-remembrance/) | Direct quote from remembrance |

---

## Data Sources

| Source | What It Contains | Access |
|--------|-----------------|--------|
| [MA OCPF](https://www.ocpf.us/) | Campaign finance filings for all MA candidates and committees | Public records search |
| [ProPublica Nonprofit Explorer](https://projects.propublica.org/nonprofits/) | IRS Form 990 data for nonprofits | Free search |
| [One Commonwealth Inc](https://projects.propublica.org/nonprofits/organizations/992551833) | 501(c)(4) — $748K revenue, Schedule L conflict of interest filing | ProPublica |
| [Barr Foundation](https://projects.propublica.org/nonprofits/organizations/46579815) | $1.9B assets, $136M disbursements, CEO $803K salary | ProPublica |
| [MA Secretary of State](https://www.sec.state.ma.us/LobbyistPublicSearch/) | Lobbyist registration and compensation | Public records |
| [EOHLC Compliance Tracker](https://www.mass.gov/info-details/mbta-communities) | § 3A compliance status for all 177 communities | Mass.gov |

---

## The $4.4 Billion Question

Lieutenant Governor candidate [@AnneBrensleyMA](https://twitter.com/AnneBrensleyMA) prepared research for the State Auditor estimating that § 3A carries **$4.4 billion in unfunded costs** to municipalities — zoning, planning, infrastructure, legal fees, staffing, and long-term compliance. None of it came with state funding. *(Note: This figure comes from Brensley's analysis. We present it as attributed research, not as our independent finding.)*

Meanwhile, the officials who created the mandate, the developers who profit from it, the nonprofits that push compliance, and the lobbying firms that shaped it are all financially connected to each other through campaign donations, employment, and board memberships.

**This dashboard lets you see those connections for yourself.**

---

## How to Use

### View the Dashboard
The dashboard is a single React (JSX) file designed to run in any React environment or in Claude.ai's artifact viewer.

### Run Locally
```bash
# Clone the repo
git clone https://github.com/duncanburns2013-dot/MBTA-Communities-Act.git
cd MBTA-Communities-Act

# The dashboard is a single JSX component
# Drop mbta-3a-analysis.jsx into any React project, or view in Claude.ai
```

### Dashboard Tabs
| Tab | What It Shows |
|-----|--------------|
| **Overview** | 177-town data table, mandate sizes, town-by-town bar chart |
| **Cui Bono** | Developer donations, lobbying firm payments, top donors |
| **The Web** | Interactive network: officials → developers → lobbyists → nonprofits → commissions |
| **Exposed** | Smoking guns — Baker/DSG, revolving doors, Fish dynasty, Shortsleeve, Kennealy |
| **Dark $** | One Commonwealth 501(c)(4), Barr Foundation, CHAPA, undisclosed donors |
| **Q & A** | Socratic walkthrough of the key questions |
| **The Question** | The question worth asking — follow the logic to its conclusion |

---

## Corrections & Errata

We believe in getting it right. These errors were caught during our own audit:

| Date | Error | Correction |
|------|-------|------------|
| Feb 2026 | Originally stated "3 consecutive Baker Housing Secretaries" | **Gregory Bialecki served under Gov. Deval Patrick (2009–2015), not Baker.** Baker's secretaries were Jay Ash and Mike Kennealy. Corrected to "3 consecutive Housing Secretaries across the Patrick and Baker administrations." |
| Feb 2026 | Originally implied Gov. Charlie Baker joined Dewey Square Group | **DSG's co-founder Charlie Baker is a different person** — a lifelong Democratic operative (Harvard '80). Gov. Baker (Harvard '79, Republican) became NCAA president in 2023. |

If you find an error, [open an issue](../../issues). We'll correct it publicly.

---

## What This Is NOT

- ❌ This is not a position paper for or against housing development
- ❌ This is not partisan — it exposes money flowing to both Democrats and Republicans
- ❌ This is not speculative — every data point links to a public record
- ❌ This is not about whether MA needs more housing (it does)

## What This IS

- ✅ A transparency tool showing who profits from a specific policy
- ✅ A campaign finance analysis using only public OCPF data
- ✅ A question about whether policy should be shaped by the people who profit from it
- ✅ A resource for journalists, town officials, and residents who want to follow the money

---

## Contributing

This is an open investigation. If you have:
- OCPF data showing additional connections
- Nonprofit 990 filings with relevant information
- Public records showing revolving-door employment
- Town-level cost data for § 3A compliance

**Open an issue or submit a PR.** All contributions must be sourced from public records.

---

## Credits

- Original § 3A cost analysis: [@AnneBrensleyMA](https://twitter.com/AnneBrensleyMA)
- Signal boost and framing: [@islantstudio](https://twitter.com/islantstudio) (Chester Tam)
- Dashboard, OCPF analysis, and investigation: Built with [Claude](https://claude.ai)
- Data: Massachusetts Office of Campaign and Political Finance, ProPublica Nonprofit Explorer, MA Secretary of State

---

## License

MIT — Use it, share it, build on it. The data belongs to the public.

---

*"If the state truly wants cities and towns to build more housing, it should be willing to provide the funding to help make that happen, instead of pushing the entire burden onto local communities and the people who already live there."* — Chester Tam
