import { categories } from "@/assets/data";

const Categories = () => {
  return (
    <div>
      <ul className="flex items-center gap-x-1 flex-nowrap border border-black/10 p-1 rounded-full max-w-full overflow-x-auto">
        <li>
          <button
            type="button"
            className="py-3 px-6 bg-primary font-medium rounded-full"
          >
            Todos
          </button>
        </li>
        {categories.map((category) => (
          <li key={category.category}>
            <button
              type="button"
              className="py-3 px-6 font-medium rounded-full hover:bg-white/70 transition-colors duration-500 ease-out"
            >
              {category.category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;