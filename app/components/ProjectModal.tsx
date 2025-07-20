import Image from "next/image";
type ProjectModalProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actvproject: Record<string, any>;
  onClose: () => void;
};
export default function ProjectModal({
  actvproject,
  onClose,
}: ProjectModalProps) {
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm backdrop-opacity-60 z-50 flex items-center justify-center">
        <div className=" rounded-md shadow-lg w-5/6  md:w-2/3 min-h-96 py-15 px-10 flex max-md:flex-col gap-2 bg-white dark:bg-darkHover">
          <div className="max-md:w-full w-1/2">
            <h1 className="font-bold">{actvproject.name}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 py-2">
              {actvproject.techstacks}
            </p>
            <p className="py-2 max-sm:text-xs">{actvproject.description}</p>
            <p className="max-sm:text-xs">
              GitHub Link :{" "}
              <a
                href={actvproject.github_link}
                target="_blank"
                className="cursor-pointer text-gray-600 text-wrap dark:text-gray-400 text-sm"
              >
                {actvproject.github_link}
              </a>{" "}
            </p>
            <p className="max-sm:text-xs">
              Deployed Link :{" "}
              <a
                href={actvproject.project_link}
                target="_blank"
                className="cursor-pointer text-gray-600 text-wrap dark:text-gray-400 text-sm"
              >
                {actvproject.project_link}
              </a>{" "}
            </p>
            <button
              className="mt-4 px-4 py-2 rounded-lg text-blue-600 dark:text-white border border-black dark:border-white cursor-pointer text-sm"
              onClick={() => onClose()}
            > 
              Back
            </button>
          </div>
          <div className="max-md:w-full w-1/2 ">
            <Image src={actvproject.icon} alt="active_project_icon " className="rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}
