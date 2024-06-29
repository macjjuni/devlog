import { redirect } from "next/navigation";

export default async function BlogPage({ params }: { params: { id: string | undefined } }) {

  if (!params?.id) {
    redirect("/404");
  } else {
    redirect(`/archive/${params.id}`);
  }
}
