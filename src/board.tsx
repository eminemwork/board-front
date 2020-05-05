import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import useGetPostAll from "./hooks/usePost";

const columns = [
  {
    title: "번호",
    dataIndex: "id",
    key: "id",
    render: (text: String) => <a>{text}</a>,
  },
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
    render: (title: String) => <span style={{ marginLeft: 32 }}>{title}</span>,
  },
  {
    title: "글쓴이",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "작성일",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "조회",
    dataIndex: "count",
    key: "count",
  },
  {
    title: "추천",
    dataIndex: "recommend",
    key: "recommend",
  },
];

export default function Board() {
  const posts = useGetPostAll();
  return <Table columns={columns} dataSource={posts} />;
}
