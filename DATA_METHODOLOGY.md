# 📊 Data Sources & Methodology

**MBTA Communities Act § 3A — Follow the Money Dashboard**
*Last updated: February 9, 2026*

---

## Overview

This document catalogs every data source, uploaded file, and analytical method used to build the dashboard. Every claim traces to public records. Where analysis was performed on raw data (e.g., aggregating OCPF donation records), the methodology is described below.

---

## 1. Campaign Finance Data (OCPF)

### Source
**Massachusetts Office of Campaign and Political Finance (OCPF)**
- URL: https://www.ocpf.us/
- Data portal: https://www.ocpf.us/Data
- Reports search: https://www.ocpf.us/Reports/SearchItems

### Files Analyzed
| File | Contents | Records |
|------|----------|---------|
| `ocpf-output.txt` | Contribution records — primary dataset | ~12,000+ |
| `ocpf-output (1).txt` through `ocpf-output (8).txt` | Additional contribution batches | ~95,000+ combined |
| `ocpf-output.xlsx` | Excel format contributions (Barry Finegold analysis) | ~1,200 |
| `ocpf-output__1_.xlsx` | Expenditure records (Finegold) | ~800 |
| `ocpf-reports.xlsx` | Summary financial reports (Finegold) | ~50 |

**Total OCPF records analyzed: ~107,862**

### Officials Tracked
Contributions were filtered for these four filers — the officials who authored, signed, implemented, or enforce § 3A:

| Official | Role | OCPF Committee |
|----------|------|----------------|
| **Brendan Crighton** | State Senator, § 3A author | Committee to Elect Brendan Crighton |
| **Maura Healey** | Governor, implementation & enforcement | Healey Committee |
| **Andrea Campbell** | Attorney General, enforcement (Milton SJC decision) | Andrea Campbell Committee |
| **Kevin Honan** | State Rep, Housing Committee Chair | Committee to Elect Kevin Honan |

### Analysis Method
1. Parsed tab-delimited OCPF text files using Python/pandas
2. Normalized employer names (e.g., "Suffolk Constr." → "Suffolk Construction")
3. Cross-referenced donor employer fields against known developer, lobbying, and housing industry firms
4. Aggregated donations by firm, individual, and recipient official
5. Identified coordinated giving patterns (same date, same amount, multiple employees)
6. Flagged revolving-door donors (former government officials now in private sector)

### Key Findings from OCPF Analysis
| Category | Amount | Donations | Method |
|----------|--------|-----------|--------|
| Developer/builder → 4 officials | $600K+ | 800+ | Employer field search: construction, development, real estate |
| Lobbying firms → 4 officials | $600K+ | 600+ | Employer field search: known lobbying firms |
| Fish family dynasty (Suffolk/Peabody/Dellbrook) | $100K+ | 150+ | Surname + employer cross-reference |
| Shared donors (Kennealy & Shortsleeve) | 103 individuals | 206+ | Donor name match across committees |
| CHAPA board members → officials | $47K+ | 80+ | Board membership list cross-referenced with OCPF |
| Barr Foundation leaders → officials | $16K+ | 20+ | 990 officer list cross-referenced with OCPF |

---

## 2. Brensley Cost Impact Report

### Source
Research prepared by **Anne Brensley** (LG candidate, R-Wayland) for the Massachusetts State Auditor.

### Methodology (Brensley's)
Brensley applied the state's own **DCAMM (Division of Capital Asset Management and Maintenance) fee schedule** to the mandate's required housing capacity:

| Assumption | Value | Notes |
|------------|-------|-------|
| Construction cost/sf | $250 | Below MA average of ~$350/sf (deliberately conservative) |
| Gross unit size | 900 sf | Includes common area allocation |
| DCAMM designer fee rate | 5.9% | Standard state fee schedule |
| Total required capacity | 273,080 units | From EOHLC Compliance Model v1.5 |

### Calculation
```
273,080 units × 900 sf × $250/sf = $61.4B construction cost
$61.4B × 5.9% DCAMM rate = ~$4.49B in designer base fees
State appropriation (Catalyst Fund): $15M
Unappropriated deficit: $4.48B (99.7% unfunded)
```

### What This Does NOT Include
- Land acquisition costs
- Infrastructure costs (water, sewer, roads)
- Permitting and legal fees
- Financing/carrying costs
- Environmental remediation
- Municipal staffing for compliance

### Dashboard Attribution
The $4.49B figure is presented as Brensley's attributed research, not as an independent finding. The dashboard states: *"This figure comes from Brensley's analysis using the state's own DCAMM fee schedule."*

---

## 3. EOHLC Compliance Model

### Source
**Executive Office of Housing and Livable Communities (EOHLC)**
- URL: https://www.mass.gov/info-details/mbta-communities
- Model version: v1.5

### Data Extracted
| Field | Value | Source |
|-------|-------|--------|
| Communities mandated | 177 | EOHLC compliance tracker |
| Existing housing stock | 1,797,592 | 2020 Census (via EOHLC) |
| Required zoning capacity | 273,080 units | EOHLC model calculations |
| Capacity as % of stock | 15.2% | Calculated: 273,080 / 1,797,592 |

### Category Breakdown (from statute)
| Category | Towns | Required % of Housing Stock |
|----------|-------|-----------------------------|
| Rapid Transit | 8 | 25% |
| Commuter Rail | 65 | 15% |
| Adjacent Community | 68 | 10% |
| Adjacent Small Town | 28 | 5% |

### Per-Community Data
All 177 communities in the dashboard's searchable table include:
- Town name
- Transit category
- Existing housing stock (2020 Census)
- Required zoning capacity (EOHLC model)
- Estimated designer base fees (Brensley methodology applied per-town)

---

## 4. ProPublica Nonprofit Explorer (IRS Form 990)

### Source
**ProPublica Nonprofit Explorer**
- URL: https://projects.propublica.org/nonprofits/

### Organizations Analyzed

#### Barr Foundation
- EIN: 04-6579815
- URL: https://projects.propublica.org/nonprofits/organizations/46579815
- Data extracted:
  - Total assets: $1.9 billion
  - Total disbursements: $136 million
  - CEO (James Canales) compensation: $803,488 + $51,909 benefits
  - Grants to housing compliance organizations (MHP, CHAPA, Abundant Housing MA)

#### One Commonwealth Inc
- EIN: 99-2551833
- URL: https://projects.propublica.org/nonprofits/organizations/992551833
- Data extracted:
  - 501(c)(4) status (donors not required to be disclosed)
  - Total revenue/expenses: ~$748K
  - Schedule L conflict of interest filing
  - Connection to Dewey Square Group (Lynda Tocci, president)

### Cross-Reference Method
Officers and key employees listed on Form 990 Schedule J were cross-referenced with OCPF donation records to identify foundation leaders who personally donate to § 3A officials.

---

## 5. Lobbying Data

### Source
**Massachusetts Secretary of State — Lobbyist Public Search**
- URL: https://www.sec.state.ma.us/LobbyistPublicSearch/

### Firms Analyzed
| Firm | Reported Salaries | Key Connection |
|------|-------------------|----------------|
| Dewey Square Group | $2.7M (2019–2025) | Runs One Commonwealth; co-founded by Charlie Baker (Dem operative) |
| Smith Costello & Crawford | N/A | Coordinated bundling pattern: partners donate $200 same day |
| Issues Management Group | $5.2M (2022–2026) | Client: Construction Industries of MA ($84K/yr) |
| Goulston & Storrs | N/A (law firm) | David Linhart: partner AND Healey Commission member |
| O'Neill & Associates | $23K+ identified | Government relations; multiple VPs donate across all officials |
| NAIOP (via Sullivan & Worcester) | $30K (S&W 2022) | Filed amicus brief in Milton case arguing for AG enforcement power |

### Analysis Method
1. Searched lobbying registrations for firms connected to housing/development
2. Cross-referenced firm employees with OCPF donation records
3. Identified coordinated donation patterns (same date, same amount)
4. Mapped client relationships (which developers hire which lobbyists)

---

## 6. News Sources & Court Records

### Key Articles Cited
| Source | Date | Topic | URL |
|--------|------|-------|-----|
| WBUR | Dec 18, 2025 | DraftKings → One Commonwealth; Tocci/DSG connection | https://www.wbur.org/news/2025/12/18/draftkings-healey-massachusetts-political-nonprofit |
| Boston Globe | May 16, 2024 | Healey housing politics advocacy | https://www.bostonglobe.com/2024/05/16/business/healey-housing-politics-advocacy/ |
| Banker & Tradesman | Sep 23, 2025 | One Commonwealth ad campaign targeting towns | https://bankerandtradesman.com/healey-driscoll-housing-nonprofit-launches-ad-campaign/ |
| Boston Herald | Jun 25, 2025 | Kennealy $2M loan exceeding state limits | https://www.bostonherald.com/2025/06/25/gops-mike-kennealy-has-loaned-his-campaign-double-the-amount-allowed-under-state-law/ |
| Boston Herald | Oct 7, 2025 | Kennealy lawyer refuses OCPF compliance | https://www.bostonherald.com/2025/10/07/mike-kennealy-plans-to-continue-ignoring-mass-loan-limit-law-lawyer-tells-regulators/ |
| PRNewswire | Apr 16, 2015 | Bialecki joins Redgate | https://www.prnewswire.com/news-releases/greg-bialecki-joins-redgate-300067398.html |
| BusinessWire | Dec 20, 2018 | Jay Ash → MACP CEO | https://www.businesswire.com/news/home/20181220005717/en/Massachusetts-Competitive-Partnership-Names-Jay-Ash-CEO |
| MassINC | Nov 26, 2024 | Bialecki remembrance ("paved the way") | https://massinc.org/2024/11/26/greg-bialecki-a-remembrance/ |
| NCAA | Mar 2023 | Gov. Baker → NCAA president | https://www.ncaa.org/sports/2023/3/1/ncaa-president-charlie-baker.aspx |
| DSG Website | — | Charlie Baker (Dem operative) bio | https://www.deweysquare.com/team/charlie-baker/ |

### Court Cases Referenced
| Case | Date | Relevance |
|------|------|-----------|
| SJC Milton decision | Jan 2025 | Established AG enforcement authority over § 3A non-compliant towns |
| Plymouth Superior Court | Jun 2025 | Court stated regulations "do not compel construction" |

---

## 7. Revolving Door Analysis

### Method
Tracked career paths of Massachusetts Housing & Economic Development Secretaries:

| Official | Administration | Tenure | Post-Government Role | Source |
|----------|---------------|--------|---------------------|--------|
| Gregory Bialecki | Patrick (D) | 2009–2015 | Redgate (RE development) | PRNewswire, Wikipedia |
| Jay Ash | Baker (R) | 2015–2018 | MACP CEO (board includes John Fish/Suffolk) | BusinessWire |
| Mike Kennealy | Baker (R) | 2018–2022 | Running for governor (R) | Boston Herald |

### Cross-Reference
- Redgate employees (Bialecki's firm): $21,200 across 37 donations to Campbell, Healey, Honan
- MACP board member John Fish (Suffolk Construction): $7,500+ to Healey personally; Suffolk total $43K+
- Kennealy self-funded ~$2M in loans exceeding $200K/cycle state limit; OCPF demanded reclassification

---

## 8. Fish Family Dynasty Analysis

### Method
1. Searched OCPF records by surname "Fish"
2. Cross-referenced with employer fields: Suffolk Construction, Peabody Properties, Dellbrook|JKS, NEI General Contracting, Ed Fish Company, EAF, Battery Wharf Hotel
3. Mapped family connections via NEREJ obituary for Edward Fish (patriarch)

### Family Tree → Corporate → Political Connections
| Family Member | Company | Role | Key Donations |
|---------------|---------|------|---------------|
| John Fish | Suffolk Construction | CEO | $7,500 Healey, $2,000 Campbell |
| Michael Fish | Dellbrook|JKS | CEO | $5,500 Healey, $4,150 Honan |
| Melissa Fish-Crane | Peabody Properties | CEO | All 4 officials — $12,250 total |
| Kevin Fish | NEI General Contracting | President | $3,500 Healey, $1,000 Campbell |
| Gretchen Fish | EAF | Manager | $3,500 Healey |
| Edward Fish | Ed Fish Company | Founder | $2,350 Honan |

**Total Fish family donations: $100K+ to officials on both sides of § 3A**

---

## 9. Two Charlie Bakers Distinction

### The Confusion
OCPF records show donations from "Charles Baker / Dewey Square Group." This was initially conflated with the former governor.

### The Facts
| | Governor Charlie Baker | DSG Charlie Baker |
|---|---|---|
| Education | Harvard '79, Northwestern MBA | Harvard '80, BU Law '84 |
| Party | Republican | Democrat |
| Career | Governor (2015–2023) → NCAA President | Dukakis admin → Clinton 2016 CAO → DSG co-founder |
| § 3A Role | Signed into law (Jan 2021) | Donates to enforcers from DSG |

### OCPF Donations (DSG Baker)
$1,000 to Campbell (2/24/25), $1,000 to Campbell (5/6/24), $1,000 to Campbell (8/31/22), $250 to Crighton (12/1/25), $200 to Crighton (11/1/22), $200 to Crighton (1/5/21)

**Total: $4,650**

---

## 10. Tools & Infrastructure

### Analysis Tools
- **Python/pandas**: OCPF data parsing, aggregation, cross-referencing
- **Claude AI**: Data analysis, pattern identification, dashboard code generation
- **esbuild**: JSX → JavaScript bundling (React + Recharts)
- **React 18 + Recharts 2.12.7**: Dashboard UI and interactive charts

### Dashboard Build Process
```
Source: entry.jsx (1,498 lines)
    ↓ esbuild --bundle --minify --jsx=automatic
Output: bundle.js (642KB) → inlined into index.html (659KB)
    ↓ GitHub Pages
Live: https://duncanburns2013-dot.github.io/MBTA-Communities-Act/
```

### Repository
- GitHub: https://github.com/duncanburns2013-dot/MBTA-Communities-Act
- License: MIT

---

## Corrections Log

| Date | Error | Correction |
|------|-------|------------|
| Feb 2026 | Stated "3 consecutive Baker Housing Secretaries" | Bialecki served under Patrick (2009–2015), not Baker |
| Feb 2026 | Implied Gov. Baker joined Dewey Square Group | DSG co-founder Charlie Baker is a different person (Dem operative, Harvard '80) |
| Feb 2026 | "The Question Nobody's Asking" tab title | Changed to "The Question Worth Asking" — the question is being asked |
| Feb 2026 | Speculative "Is anne2026.com a campaign domain?" Q&A | Removed — Brensley is a declared LG candidate; domain speaks for itself |

---

## Credits

- **Cost Impact Analysis**: Anne Brensley (@AnneBrensley), LG candidate (R-Wayland)
- **Signal Boost & Framing**: Chester Tam (@islantstudio)
- **Dashboard, OCPF Analysis, Investigation**: Built with Claude (claude.ai)
- **Data**: Massachusetts OCPF, ProPublica Nonprofit Explorer, MA Secretary of State, EOHLC, IRS Form 990

---

*All data is from public records. If you find an error, open an issue on GitHub.*
