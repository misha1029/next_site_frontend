import React from "react";
import { Button, Input } from "@material-ui/core";
import styles from "./WriteForm.module.scss";
import dynamic from "next/dynamic";
import { Api } from "../../utils/api";
import { PostItem } from "../../utils/api/types";

const Editor = dynamic(() => import("../Editor").then((m) => m.Editor), {
  ssr: false,
});

interface WriteFormProps {
  data?: PostItem;
}

export const WriteForm: React.FC<WriteFormProps> = ({data}) => {
  const [isLoading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState(data?.title || '');
  const [blocks, setBlocks] = React.useState(data?.body || []);

  const onAddPost = async () => {
    try {
      setLoading(true);
      const post = await Api().post.create({
        title,
        body: blocks,
      });
      console.log(post);
    } catch (err) {
      console.warn("Create post", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
      />
      <div className={styles.editor}>
        <Editor initialBlocks = {data?.body} onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button
        disabled={isLoading || !blocks.length || !title}
        onClick={onAddPost}
        variant="contained"
        color="primary"
      >
        Опубликовать
      </Button>
    </div>
  );
};
