import { MovieListProps } from "@/types";

const NavResult = ({ movies = [] }: MovieListProps) => {
  return (
    <>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 sm:mt-0">
        Found <strong className="font-medium">{movies.length}</strong> results
      </p>
    </>
  );
};

export default NavResult;
