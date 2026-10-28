# Design System — RK HIVE (Asansol)

<!-- impeccable:design-schema 1 -->

## Visual World & Thesis
**"The Neighborhood Atelier"** — An authentic, grounded, professionally designed dual-business destination in Asansol, West Bengal. Where warm, vibrant culinary hospitality meets trusted, transparent pre-owned automotive expertise.

RK HIVE rejects all generic AI-generated boilerplate, fake luxury tropes (imaginary supercars, caviar, VIP clubs), neon glows, and repetitive floating cards. Instead, it features:
- **Grounded, approachable elegance**: tailored to real Asansol patrons and families along Shakespeare Sarani.
- **Substantial stacked editorial sections**: generous spacing, alternating image-and-text compositions, and subtle separators instead of boxed cards.
- **Authentic photography audit**: genuine plated clay-oven tandoori platters (no aquarium/fish), actual restaurant dining hall & party booths, and real Indian pre-owned vehicles (Royal Enfield Classic 350 and Maruti Suzuki Swift).
- **Butterick-informed typography**: `Outfit` for headings with `text-wrap: balance`, `Urbanist` for body with `text-wrap: pretty`, and `IBM Plex Mono` for tabular pricing and specs.
- **Restrained motion**: gentle fade-and-rise viewport entrances, zero gratuitous bouncing, full respect for `prefers-reduced-motion`.

---

## Color Tokens & Allocation Strategy
A disciplined three-color strategy ("Jet Black, Cerulean Blue, Neon Rose") applied wisely to reinforce the dual-brand architecture:

### 1. Canvas Ground & Surfaces (Jet Black)
- **Deep Jet Canvas**: `#050507` (pure, uncompromising pitch-black base providing high-contrast readability without washed-out graying)
- **Elevated Jet Surfaces**: `#0B0E14` (editorial cards and layered panels)
- **Subtle Precision Dividers**: `rgba(255, 255, 255, 0.07)`
- **Crisp Primary Text**: `#F8F9FA`
- **Muted Steel Secondary Text**: `#94A3B8` / `#A1A1AA`

### 2. Dual-Brand Distinct Roles ("Used Wisely")
- **Neon Rose (`#FF1376` / `#E11D48`)**: Assigned exclusively as the signature energy for **Hive The Lounge RK 2.0**. Evokes vibrant evening celebrations, tandoori warmth, mocktails, and festive party bookings. Used with strict discipline on badges, interactive tabs, reservation CTAs, and subtle card borders.
- **Cerulean Blue (`#0284C7` / `#0EA5E9`)**: Assigned exclusively as the signature precision for **Hive RK Enterprise Automobiles**. Evokes mechanical reliability, engineering trust, vehicle inspection standards, and RTO documentation. Used on vehicle category filters, specification badges, and auto inquiry CTAs.
- **Unified Touchpoints**: Navigation and dual-brand overview subtly balance both accents against the deep Jet Black canvas.

---

## Typography Hierarchy

- **Display & Headings**: `Outfit` (Bold 700/800, balanced modernist geometric sans, normal font style without forced italics, tight tracking `-0.02em`, `text-wrap: balance`)
- **Navigation & Subheads**: `Outfit` & `Urbanist` (Clean uppercase tracking, distinct weight separation)
- **Body & Information**: `Urbanist` (Modernist geometric sans, 1.6 line-height, comfortable 65–75ch measure, `text-wrap: pretty`)
- **Badges, Specs & Review Metrics**: `IBM Plex Mono` (Clean engineering monospaced precision for pricing `₹180 – ₹230`, Justdial ratings, hours, and mileage)

---

## Layout Architecture

1. **Overview Hero**:
   - High-contrast, uncluttered first viewport.
   - Genuine dining hall photography with deep dark overlay.
   - Headline is the single visual anchor ("Good Food & Celebrations, Trusted Automobiles in Asansol").
   - Both legacy hero buttons removed for a cleaner first impression.
2. **Business Editorial Sections**:
   - Substantial vertically stacked editorial layouts replacing floating card grids.
   - Alternating media/text vignettes with verified Asansol details.
3. **Lounge & Menu Layout**:
   - Three distinct editorial sections: Comfortable Booth Dining, Birthday & Party Celebrations, Multi-Cuisine Delights.
   - Clean restaurant-menu layout with categorized headings, item descriptions, and price alignment.
   - Authentic plated tandoori dish photography (aquarium fish completely eliminated).
4. **Automobile Showroom**:
   - Section-based editorial system with verified Royal Enfield and Maruti Suzuki Swift photography.
   - Clear inventory showcase with simple category filtering and direct WhatsApp liaison.
5. **Reservations**:
   - Distinct sections for Main Lounge & Booth Hall and Celebration & Party Enclave.
   - Working inquiry modal and pre-filled WhatsApp routing.
