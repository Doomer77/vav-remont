import Heading from "../../shared/ui/heading/Heading";
import React, {FC} from "react";
import { IPostInfo } from "./types";

const PostInfo: FC<IPostInfo> = ({ post }) => {

    if (!post) {
        return <Heading tag="h3" text="Empty post" />
    }

    return (
        <>
            <Heading tag="h3" text={post.title} />
            <p>{post.body}</p>
        </>
    );
}

export default PostInfo;