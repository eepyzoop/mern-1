import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [total, pending, resolved, recent] = await Promise.all([
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { status: "Pending" } }),
    prisma.contactMessage.count({ where: { status: { in: ["Completed", "Resolved", "Done"] } } }),
    prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ]);

  return (
    <>
      <h1 style={{ fontSize: "clamp(28px,4vw,38px)", marginBottom: 28 }}>Dashboard</h1>

      <div className="stat-grid">
        <div className="stat-card">
          <b>{total}</b>
          <span>Total contacts</span>
        </div>
        <div className="stat-card">
          <b>{pending}</b>
          <span>Pending</span>
        </div>
        <div className="stat-card">
          <b>{resolved}</b>
          <span>Resolved / Completed</span>
        </div>
      </div>

      <h2 style={{ fontSize: 18, marginBottom: 14 }}>Recent contacts</h2>
      <div className="table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Received</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recent.length === 0 && (
              <tr>
                <td colSpan={4}>No contact messages yet.</td>
              </tr>
            )}
            {recent.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.createdAt.toLocaleDateString()}</td>
                <td>{m.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
