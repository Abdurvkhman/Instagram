import { useAppSelector } from "../hooks/hook";

interface btn {
  setState: any;
  state: boolean;
  get: any;
  del: any;
}

const EdAndDelBtns: React.FC<btn> = ({ state, get, del }) => {
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <div className={state ? "btns-wrapper" : "none"}>
      {posts.map((i) => (
        <>
          <button onClick={() => get(i._id)} className="first">
            Edit
          </button>
          <button
            key={i._id}
            onClick={() => del(i._id)}
            className="first second"
          >
            Delete
          </button>
        </>
      ))}
    </div>
  );
};

export default EdAndDelBtns;
