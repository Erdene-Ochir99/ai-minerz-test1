import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function GET(req, { params }) {
  const uid = params.tgid;
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  // Хэрвээ хэрэглэгч байхгүй бол шинээр бүртгэнэ
  if (!snap.exists()) {
    await setDoc(ref, {
      balance: 0,
      lastClaim: 0,
      vipUntil: 0,
      invitedBy: null,
      createdAt: Date.now(),
    });
    return Response.json({ status: "created" });
  }

  // Хэрэглэгч байгаа бол дата-г буцаана
  return Response.json({
    status: "exists",
    ...snap.data()
  });
}
