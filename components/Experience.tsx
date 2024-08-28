import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section className="py-20 w-full">
      <h2 className="heading mb-12">
        My &nbsp; <span className="text-purple">work experince</span>
      </h2>

      <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(({ id, title, desc, className, thumbnail }) => (
          <Button
            className="p-6 lg:p-10 2xl:p-14   rounded-3xl text-black dark:text-white flex sm:flex-row flex-col gap-7 sm:items-center items-start text-start"
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "#04071d",
              backgroundColor:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)",
            }}
            key={id}
          >
            <img className="lg:w-32 md:w-20 w-16" src={thumbnail} alt={thumbnail} />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
              <p className="text-base font-medium">{desc}</p>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};
export default Experience;
