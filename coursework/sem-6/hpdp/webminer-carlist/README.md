# WebMiner — Carlist Scraper (100k rows)

**Subject:** High Performance Data Processing
**Semester:** 6

## Overview

Built a Python web scraping pipeline using Playwright to collect 100,000 car
listings from Carlist and MotorTrader. Engineered to handle pagination,
state persistence, and resume-on-failure (via `carlist_pw_state.json`).

## Skills

`Python` · `Playwright` · `Web Scraping` · `Data Engineering`

## Architecture highlights

- Stateful scraper with resume capability — survives interruptions
- Cleaning pipeline (`clean_data.ipynb`, `clean_csv.py`)
- Optimisation notebook for throughput (`optimise.ipynb`)

## What to upload here

- `carlist_scraper_pw.py` — main scraper
- `clean_csv.py`, `check_csv.py` — cleaning utilities
- `clean_data.ipynb`, `optimise.ipynb` — analysis notebooks
- `Final_Report (WebMiner).pdf` — final report
- A sample of the dataset (e.g. first 1000 rows as `sample.csv`) — do NOT upload the full 100k row CSV if it's large

> **Note:** Large CSVs may exceed GitHub's file limits. Upload a small sample
> and document the full dataset structure in this README.
