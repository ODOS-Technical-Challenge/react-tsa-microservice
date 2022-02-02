import React, { FunctionComponent } from "react";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import { Dropdown } from "../../common";
import { useWaitTime } from "../../hooks";

const fallback = [
  10, 20, 30, 40, 50, 10, 20, 30, 40, 90, 90, 120, 120, 160, 250, 30, 40, 50,
  10, 120, 120, 160, 250, 30,
];

const transform = (data: number[]) => {
  return data.map((data, index) => {
    const time = (index % 12) + 1;
    if (!(time % 3)) {
      return { name: `${time}`, min: data };
    } else {
      return { min: data };
    }
  });
};

interface Props {
  code: string;
}

export const ChartHistory: FunctionComponent<Props> = ({ code }: Props) => {
  const { data } = useWaitTime(code);

  const all = transform(data.length ? data : fallback);
  return (
    <Dropdown title="Predicted wait times">
      <BarChart
        width={500}
        height={300}
        data={all}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="min" fill="#255ea2" />
      </BarChart>
    </Dropdown>
  );
};
