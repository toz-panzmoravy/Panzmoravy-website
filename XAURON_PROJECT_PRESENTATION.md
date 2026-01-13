# XAURON - Automatizovaný Trading Bot pro MetaTrader 5

## 📋 Přehled projektu

**XAURON** je pokročilý automatizovaný trading systém pro obchodování s XAUUSD (zlato) na platformě MetaTrader 5. Projekt kombinuje pokročilou technickou analýzu, multi-timeframe strategie, AI-asistované rozhodování a komplexní risk management pro vytvoření robustního a adaptabilního trading botu.

### Klíčové charakteristiky
- 🤖 **Automatizovaný trading** - Plně autonomní obchodní systém
- 🧠 **AI integrace** - LM Studio pro inteligentní rozhodování
- 📊 **Multi-timeframe analýza** - Současná analýza M1, M3, M5 časových rámců
- 🛡️ **Pokročilý risk management** - Automatické řízení rizika a prevence ztrát
- 📈 **Adaptivní strategie** - Dynamické přizpůsobení tržním podmínkám

---

## 🎯 Hlavní funkce

### 1. Trading Engine
- **RULES Strategy** - Pokročilá obchodní strategie založená na technických indikátorech
- **AI-assisted decisions** - Integrace s LM Studio pro kontextové rozhodování
- **Multi-timeframe analysis** - Simultánní analýza více časových rámců (M1, M3, M5)
- **Trend Bias V2** - Pokročilý systém detekce trendu s scoring systémem (-100 až +100)
- **Counter-trend trading** - Inteligentní obchodování proti trendu s redukovanou pozicí

### 2. Order Management
- **Pending Manager** - Automatická správa BUY_STOP/SELL_STOP příkazů
- **Pending Analyzer** - Analýza existujících pozic v 60s intervalech
- **Micro-reversal** - Krátkodobé reverzní obchody pro zachycení rychlých pohybů
- **Stop-bias conversion** - Inteligentní konverze orders podle tržních podmínek

### 3. Risk Management
- **AI Loss Prevention** - Aktivní monitoring pozic pomocí AI modelu
- **Historical Pattern Analyzer** - Učení se z minulých ztrát
- **Enhanced Pre-Entry Filter** - Vylepšený LM prompt s agresivní loss prevention logikou
- **Automatické Stop Loss/Take Profit** - Strukturované řízení rizika
- **Position sizing** - Dynamické přizpůsobení velikosti pozice podle síly trendu

### 4. Monitoring & Reporting
- **Live Dashboard** - Real-time monitoring obchodů a výkonnosti
- **Comprehensive logging** - Detailní logování všech akcí
- **Performance analysis** - Analýza výkonnosti a metrik
- **System health check** - Kontrola stavu systému

---

## 🛠️ Technologie a architektura

### Technologický stack
- **Python 3.8+** - Hlavní programovací jazyk
- **MetaTrader5 API** - Integrace s trading platformou
- **LM Studio** - Lokální AI model pro rozhodování
- **Pandas & NumPy** - Data processing a analýza
- **Requests** - HTTP komunikace s AI API

### Architektura modulů
```
bot/
├── main_mtf_micro.py          # Hlavní trading engine
├── trend_bias_v2.py           # Pokročilá detekce trendu
├── strategy_pro.py             # Pokročilá obchodní strategie
├── lm_client_pro.py           # AI integrace
├── pending_manager.py         # Správa pending orders
├── risk.py                     # Risk management
├── trade_manager.py            # Správa obchodů
└── ai_loss_prevention.py      # AI prevence ztrát
```

---

## 🚀 Klíčové inovace

### Trend Bias V2 System
**Problém:** Původní systém blokoval 30-70% obchodních příležitostí kvůli přísným podmínkám.

**Řešení:** Implementace scoring systému (-100 až +100) místo binárního rozhodování:
- **STRONG trend** (+60 až +100): Trend-aligned trades 130% size, counter-trend 50% size
- **MODERATE trend** (+40 až +60): Trend-aligned trades 110% size, counter-trend 70% size
- **WEAK trend** (+20 až +40): Trend-aligned trades 100% size, counter-trend 90% size

**Výsledek:** 
- 20-50% více obchodních příležitostí
- Vyvážený poměr BUY/SELL (blíže k 50/50)
- Lepší využití tržních příležitostí

### AI Loss Prevention System
Komplexní systém prevence ztrát kombinující:
1. **Aktivní monitoring** - Každých 30s analýza otevřených pozic pomocí AI
2. **Pattern recognition** - Učení se z historických ztrát
3. **Pre-entry filtering** - Vylepšený LM prompt s agresivní loss prevention logikou

**Severity levels:**
- 🟢 LOW - Pozice v pořádku
- 🟡 MEDIUM - Drobné varovné signály
- 🟠 HIGH - Významné riziko
- 🔴 CRITICAL - Okamžitá akce doporučena

### Multi-Timeframe Analysis
Simultánní analýza více časových rámců pro:
- Potvrzení signálů napříč horizonty
- Detekci divergence mezi timeframy
- Optimalizaci vstupních/výstupních bodů

---

## 📊 Výkonnost a výsledky

### Metriky
- **Využití příležitostí:** 90-95% (oproti 60-70% v původní verzi)
- **Poměr BUY/SELL:** Vyvážený (blíže k 50/50)
- **Profit factor:** Zlepšení díky lepšímu využití tržních příležitostí
- **Risk management:** Automatická prevence velkých ztrát

### Testování
- **Testováno na:** EURUSD M1, XAUUSD M5
- **Režimy:** Conservative, Balanced, Aggressive
- **Status:** ✅ Production ready (V2), 🔥 Experimental (V3 s BB Trap)

---

## 🎓 Technické dovednosti demonstrované

### 1. Pokročilá algoritmická logika
- Implementace komplexních stavových modelů
- Rozhodovací stromy pro trading strategie
- Scoring systémy a vážené analýzy
- Pattern recognition algoritmy

### 2. Integrace AI/ML
- Integrace lokálního AI modelu (LM Studio)
- Prompt engineering pro trading kontext
- AI-asistované rozhodování v reálném čase
- Historická analýza patternů

### 3. Risk Management
- Automatické řízení rizika
- Dynamické position sizing
- Stop Loss/Take Profit optimalizace
- Multi-layer loss prevention

### 4. System Architecture
- Modulární design
- Asynchronní zpracování
- Real-time monitoring
- Comprehensive logging

### 5. Data Processing
- Multi-timeframe data aggregation
- Technická analýza indikátorů
- Real-time market data processing
- Performance metrics calculation

---

## 📁 Struktura projektu

```
XAURON/
├── bot/                        # Hlavní trading moduly
│   ├── main_mtf_micro.py      # Core trading engine
│   ├── trend_bias_v2.py       # Trend detection V2
│   ├── strategy_pro.py        # Trading strategy
│   ├── lm_client_pro.py       # AI integration
│   ├── pending_manager.py     # Order management
│   ├── risk.py                # Risk management
│   └── ai_loss_prevention.py  # AI loss prevention
│
├── Logs/                       # Trading logs
├── Historical_Data/            # Market data
├── *.bat                       # Launch scripts
└── *.md                        # Documentation
```

---

## 🔧 Konfigurace a použití

### Rychlé spuštění
```bash
# V2 - Stabilní verze (doporučeno)
run_mtf_optimized_v2.bat

# V3 - Experimentální verze
run_mtf_optimized_v3_BB_EXPERIMENTAL.bat
```

### Konfigurační možnosti
- **Conservative** - Nízké riziko, méně příležitostí
- **Balanced** - Vyvážený přístup (doporučeno)
- **Aggressive** - Vysoké riziko, více příležitostí

### Timeframe selection
- M1 - Scalping, vysoká frekvence
- M3 - Střední frekvence
- M5 - Doporučeno pro XAUUSD

---

## 🎯 Business Value

### Pro obchodníky
- **Automatizace** - 24/7 trading bez nutnosti neustálého monitoringu
- **Disciplína** - Eliminace emocionálních rozhodnutí
- **Konzistence** - Systematický přístup k obchodování
- **Analýza** - Komplexní multi-timeframe analýza

### Technické přínosy
- **Škálovatelnost** - Modulární architektura umožňuje snadné rozšíření
- **Udržitelnost** - Čistý kód a dokumentace
- **Testovatelnost** - Komplexní testovací suite
- **Monitorovatelnost** - Detailní logging a reporting

---

## 📚 Dokumentace

Projekt obsahuje rozsáhlou dokumentaci:
- `README.md` - Základní přehled a instalace
- `README_ENHANCED.md` - Rozšířený popis funkcí
- `BIAS_V2_IMPROVEMENTS.md` - Detailní popis Trend Bias V2
- `AI_LOSS_PREVENTION_DOCS.md` - AI loss prevention systém
- `QUICK_START_V2.md` - Rychlý start guide

---

## 🔗 Odkazy

- **GitHub Repository:** https://github.com/toz-panzmoravy/XAURON
- **Verze:** 
  - V2 (main) - ✅ Production ready
  - V3 (experimental) - 🔥 Testing required

---

## 📝 Závěr

XAURON představuje komplexní řešení pro automatizované obchodování, které kombinuje pokročilou technickou analýzu, AI-asistované rozhodování a robustní risk management. Projekt demonstruje schopnosti v oblasti:

- **Algoritmického vývoje** - Komplexní trading logika
- **AI/ML integrace** - Praktické využití AI v tradingu
- **System design** - Modulární a škálovatelná architektura
- **Risk management** - Pokročilé techniky řízení rizika
- **Data processing** - Real-time analýza tržních dat

Projekt je aktivně vyvíjen a testován, s pravidelnými aktualizacemi a vylepšeními založenými na reálných výsledcích.

---

**Status:** ✅ Aktivní vývoj  
**Poslední aktualizace:** 2025  
**Technologie:** Python, MetaTrader5, LM Studio, AI/ML


