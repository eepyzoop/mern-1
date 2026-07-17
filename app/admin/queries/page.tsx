import { prisma } from "@/lib/prisma";
import StatusSelect from "@/components/StatusSelect";

export const metadata = { title: "Contact Queries" };
export const dynamic = "force-dynamic";

export default async function AdminQueriesPage() {
  const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <h1 style={{ fontSize: "clamp(28px,4vw,38px)", marginBottom: 28 }}>Contact queries</h1>

      <div className="table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Received</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 && (
              <tr>
                <td colSpan={5}>No contact messages yet.</td>
              </tr>
            )}
            {messages.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td className="msg">{m.message}</td>
                <td>{m.createdAt.toLocaleString()}</td>
                <td>
                  <StatusSelect id={m.id} status={m.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
