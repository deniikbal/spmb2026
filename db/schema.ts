import { relations } from "drizzle-orm";
import { boolean, index, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("email_verified").default(false).notNull(),
    image: text("image"),
    role: text("role").default("user").notNull(),
    banned: boolean("banned").default(false),
    banReason: text("ban_reason"),
    banExpires: timestamp("ban_expires"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => /* @__PURE__ */ new Date())
        .notNull(),
});

export const session = pgTable(
    "session",
    {
        id: text("id").primaryKey(),
        expiresAt: timestamp("expires_at").notNull(),
        token: text("token").notNull().unique(),
        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at")
            .$onUpdate(() => /* @__PURE__ */ new Date())
            .notNull(),
        ipAddress: text("ip_address"),
        userAgent: text("user_agent"),
        userId: text("user_id")
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),
    },
    (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = pgTable(
    "account",
    {
        id: text("id").primaryKey(),
        accountId: text("account_id").notNull(),
        providerId: text("provider_id").notNull(),
        userId: text("user_id")
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),
        accessToken: text("access_token"),
        refreshToken: text("refresh_token"),
        idToken: text("id_token"),
        accessTokenExpiresAt: timestamp("access_token_expires_at"),
        refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
        scope: text("scope"),
        password: text("password"),
        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at")
            .$onUpdate(() => /* @__PURE__ */ new Date())
            .notNull(),
    },
    (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = pgTable(
    "verification",
    {
        id: text("id").primaryKey(),
        identifier: text("identifier").notNull(),
        value: text("value").notNull(),
        expiresAt: timestamp("expires_at").notNull(),
        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at")
            .defaultNow()
            .$onUpdate(() => /* @__PURE__ */ new Date())
            .notNull(),
    },
    (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const userRelations = relations(user, ({ many }) => ({
    sessions: many(session),
    accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
    user: one(user, {
        fields: [session.userId],
        references: [user.id],
    }),
}));

export const accountRelations = relations(account, ({ one }) => ({
    user: one(user, {
        fields: [account.userId],
        references: [user.id],
    }),
}));

export const student = pgTable("student", {
    id: text("id").primaryKey(),
    // Identitas
    nis: text("nis"),
    nisn: text("nisn"),
    nmSiswa: text("nm_siswa").notNull(),
    tempatLahir: text("tempat_lahir"),
    tanggalLahir: text("tanggal_lahir"),
    jenisKelamin: text("jenis_kelamin"),
    agama: text("agama"),
    alamatSiswa: text("alamat_siswa"),
    teleponSiswa: text("telepon_siswa"),
    diterimaTanggal: text("diterima_tanggal"),
    // Data Orang Tua / Wali
    nmAyah: text("nm_ayah"),
    nmIbu: text("nm_ibu"),
    pekerjaanAyah: text("pekerjaan_ayah"),
    pekerjaanIbu: text("pekerjaan_ibu"),
    nmWali: text("nm_wali"),
    pekerjaanWali: text("pekerjaan_wali"),
    alamatOrtu: text("alamat_ortu"),
    teleponOrtu: text("telepon_ortu"),
    alamatWali: text("alamat_wali"),
    teleponWali: text("telepon_wali"),
    // Detail Pelengkap
    statusDalamKel: text("status_dalam_kel"),
    anakKe: text("anak_ke"),
    sekolahAsal: text("sekolah_asal"),
    diterimaKelas: text("diterima_kelas"),
    fotoSiswa: text("foto_siswa"),
    noIjasahnas: text("no_ijasahnas"),
    tglLulus: text("tgl_lulus"),
    noTranskrip: text("no_transkrip"),
    // Timestamps
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => /* @__PURE__ */ new Date())
        .notNull(),
});
