import React from 'react';
import './style/table.scss'

export interface BaseTableProps {
  label?: string,
  data?: object[],
  columns?: object[]
}

export type TableProps = BaseTableProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

// const InternalButton: React.ForwardRefRenderFunction<unknown, TableProps> = (props, ref) => {
const InternalButton: React.ForwardRefRenderFunction<unknown, TableProps> = () => {

  // const {
  //   // className,
  //   // children,
  //   data,
  //   columns
  // } = props;

  // const tableRef = (ref as any) || React.createRef<HTMLElement>();
  //
  // const {getPrefixCls} = useContext(ConfigContext);
  // const prefixCls = getPrefixCls('table');
  //
  // const tableCls = classNames(
  //   prefixCls,
  //   className,
  // );

  // function parseColumns(columns: object[]) {


  // columns.map(e->{
  //
  //   return e;
  // })

  //   return <></>
  // }

  // function parseData(data: object[]) {
  //
  //   return <></>
  // }

  const tableNode = (
    <table>

      {/*${parseColumns(columns)}*/}

      {/*${parseData(data)}*/}

    </table>
  );

  return <>
    {tableNode}
  </>
}

const Table = React.forwardRef<unknown, TableProps>(InternalButton);

Table.displayName = 'Table';

export default Table;