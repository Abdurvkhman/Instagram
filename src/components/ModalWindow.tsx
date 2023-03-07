import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import Arrow from "../icons/Arrow.png";
import Ava from "../images/avatarka.png";
import Emodjis from "../images/emojis.png";
import { addPosts, editPost } from "../reducers/user/posts/postsAction";

interface modal {
  active: boolean;
  setActive: any;
  secondActive: boolean;
  setSecondActive: any;
  changeDesc: string;
  setDesc: any;
  changeImg: string;
  setChangeImg: any;
}

const ModWindow: React.FC<modal> = ({
  active,
  setActive,
  secondActive,
  setSecondActive,
  changeDesc,
  setDesc,
  changeImg,
  setChangeImg,
}) => {
  const [previewImage, setPreviewImage] = useState<File | string | null>(null);

  const previewImageInputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<File | null>(null);

  const { user } = useAppSelector((state) => state.autorize);

  const { posts } = useAppSelector((state) => state.posts);

  const [inputLength, setInputLength] = useState(Number);

  const [description, setDescription] = useState("");

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file) {
      const reader = new FileReader();
      setImage(file[0]);
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file[0]);
    }
  };

  const inputHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLength(e.target.value.length);
    setDescription(e.target.value);
    setDesc(e.target.value);
  };
  const changeFirstStap = () => {
    setActive(true);
    setSecondActive(false);
  };

  const changeModalStap = () => {
    setActive(false);
    setSecondActive(true);
  };

  const addClick = () => {
    if (changeImg) {
      posts.filter((i) => {
        if (i.user._id === user._id) {
          const postId = i._id;
          const description = changeDesc;
          dispatch(editPost({ postId, description }));
        }
      });
    }
    setSecondActive(false);
    dispatch(addPosts({ description, image }));
    setDesc("");
    setDescription("");
  };

  return (
    <>
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <p className="first-p">Создание публикации</p>
            <p onClick={changeModalStap} className="second-p">
              Далее
            </p>
          </div>
          <hr />
          <div className="main">
            <p className="main-title">Перетащите сюда фото и видео</p>
            <form action="">
              <div className="upload-file__wrapper">
                <input
                  type="file"
                  name="files[]"
                  id="upload-file__input_1"
                  className="upload-file__input"
                  accept="image/*"
                  multiple
                  ref={previewImageInputRef}
                  onChange={handleChange}
                />
                <label
                  className="upload-file__label"
                  htmlFor="upload-file__input_1"
                >
                  <span
                    onSubmit={() => previewImageInputRef.current!.click()}
                    className="upload-file__text"
                  >
                    Выбрать на компьютере
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className={secondActive ? "second-modal modal" : "modal"}
        onClick={() => setSecondActive(false)}
      >
        <div
          className="second-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="second-modal-content-header">
            <div className="arrow-img">
              <img onClick={changeFirstStap} src={Arrow} alt="error" />
            </div>
            <p className="first-p">Создание публикации</p>
            <p onClick={addClick} className="second-p">
              Поделиться
            </p>
          </div>
          <hr />
          <div className="main">
            <div className="img-block">
              <img
                className={changeImg ? "prev-none" : "prev"}
                src={previewImage as string}
                alt="error"
              />
              <img
                className={changeImg ? "prev" : "prev-none"}
                src={changeImg}
                alt="error"
              />
            </div>
            <div className="main-items">
              <div className="ava">
                <img src={Ava} alt="error" />
                <p className="username">{user.username}</p>
              </div>
              <input
                className="text-input"
                defaultValue={changeDesc}
                placeholder="Добавить подпись..."
                onChange={inputHandleChange}
                type="text"
                maxLength={2200}
              />
              <div className="main-footer">
                <div className="main-footer-img">
                  <img src={Emodjis} alt="error" />
                </div>
                <p>{`${inputLength}/2,200`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModWindow;
