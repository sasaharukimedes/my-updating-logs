export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 5;

  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  // console.log("range:", range);
  // console.log("totalCount:", totalCount);

  return (
    <ul class="flex flex-row mx-auto justify-center items-center mt-3">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li
          class="list-none px-3 text-xl hover:font-bold"
          key={index}
        >
          <a href={`/pages/blog/page/${number}`}>{number}</a>
        </li>
      ))}
    </ul>
  );
};
