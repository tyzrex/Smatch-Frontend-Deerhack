import UserCard from "../user-card";

export default function UserFeedback() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center justify-center gap-4 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What our users say
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from real people who have found their dream jobs with
                Smatch.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 mt-5">
              <UserCard
                title={"Marketing Manager"}
                name="Alice"
                description="The streamlined application process on Smatch saved me so much time and effort. I was able to apply to multiple jobs with just a few clicks."
              />
              <UserCard
                title={"Marketing Manager"}
                name="Alice"
                description="The streamlined application process on Smatch saved me so much time and effort. I was able to apply to multiple jobs with just a few clicks."
              />
              <UserCard
                title={"Marketing Manager"}
                name="Alice"
                description="The streamlined application process on Smatch saved me so much time and effort. I was able to apply to multiple jobs with just a few clicks."
              />
              <UserCard
                title={"Marketing Manager"}
                name="Alice"
                description="The streamlined application process on Smatch saved me so much time and effort. I was able to apply to multiple jobs with just a few clicks."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
