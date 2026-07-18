-- ============================================================
-- Ty Logistics — Supabase Schema
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- Enums
CREATE TYPE user_role AS ENUM ('SENDER', 'RECEIVER', 'ADMIN', 'RIDER');
CREATE TYPE package_status AS ENUM ('PENDING', 'PICKED_UP', 'IN_TRANSIT', 'DELIVERED', 'CANCELLED', 'LOST');

-- ── Users ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id          TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  full_name   TEXT        NOT NULL,
  email       TEXT        NOT NULL UNIQUE,
  password    TEXT        NOT NULL,
  role        user_role   NOT NULL DEFAULT 'SENDER',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_users_email ON users (email);

-- ── Packages ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS packages (
  id               TEXT           PRIMARY KEY DEFAULT gen_random_uuid()::text,
  tracking_number  TEXT           NOT NULL UNIQUE,
  item_name        TEXT           NOT NULL,
  description      TEXT,
  weight           DOUBLE PRECISION NOT NULL,
  delivery_fee     DOUBLE PRECISION NOT NULL DEFAULT 0,
  status           package_status NOT NULL DEFAULT 'PENDING',

  -- Sender
  sender_name      TEXT NOT NULL,
  sender_phone     TEXT NOT NULL DEFAULT '',
  sender_address   TEXT NOT NULL DEFAULT '',
  sender_lga       TEXT NOT NULL DEFAULT '',
  sender_state     TEXT NOT NULL DEFAULT '',

  -- Receiver
  receiver_name    TEXT NOT NULL,
  receiver_phone   TEXT NOT NULL DEFAULT '',
  receiver_address TEXT NOT NULL DEFAULT '',
  receiver_lga     TEXT NOT NULL DEFAULT '',
  receiver_state   TEXT NOT NULL DEFAULT '',

  -- Current location
  current_lga      TEXT,
  current_state    TEXT,

  -- Relations
  sender_id        TEXT REFERENCES users(id),
  receiver_id      TEXT REFERENCES users(id),

  created_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_packages_tracking ON packages (tracking_number);
CREATE INDEX idx_packages_status   ON packages (status);
CREATE INDEX idx_packages_sender   ON packages (sender_id);
CREATE INDEX idx_packages_receiver ON packages (receiver_id);

-- ── Tracking Updates ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tracking_updates (
  id          TEXT        PRIMARY KEY DEFAULT gen_random_uuid()::text,
  status      TEXT        NOT NULL,
  note        TEXT,
  state       TEXT,
  lga         TEXT,
  package_id  TEXT        NOT NULL REFERENCES packages(id) ON DELETE CASCADE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_tracking_updates_package ON tracking_updates (package_id);

-- ── Contact Messages ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contacts (
  id          TEXT        PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name        TEXT        NOT NULL,
  email       TEXT        NOT NULL,
  message     TEXT        NOT NULL,
  read        BOOLEAN     NOT NULL DEFAULT false,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── Row Level Security (enable but allow service_role full access) ──
ALTER TABLE users            ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages         ENABLE ROW LEVEL SECURITY;
ALTER TABLE tracking_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts         ENABLE ROW LEVEL SECURITY;

-- Service-role bypass policies (the Next.js server uses the service_role key)
CREATE POLICY "service_role_all" ON users            FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON packages         FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON tracking_updates FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON contacts         FOR ALL USING (true) WITH CHECK (true);