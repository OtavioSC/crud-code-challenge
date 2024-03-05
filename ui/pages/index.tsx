import FormPost from "@/components/FormPost/FormPost";
import Post from "@/components/Post/Post";

export default function Page() {
  return (
    <main className="w-[800px] bg-white h-full">
      <header className="h-[80px] bg-[#7695EC] flex items-center">
        <h1 className="text-xl font-bold text-white pl-10">CodeLeap Network</h1>
      </header>
      <section className="flex flex-col justify-center pt-8 items-center">
        <FormPost />
				<Post/>
      </section>
    </main>
  );
}
