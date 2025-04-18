import { redirect } from "next/navigation";

export default async function BlogPage({ params }: { params: Promise<{ id: string | undefined }> }) {

  const resolveParams = await params;

  if (!resolveParams?.id) {
    redirect("/404");
  } else {
    redirect(`/archive/${resolveParams.id}`);
  }
}
