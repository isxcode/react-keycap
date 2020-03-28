import React from "react";
import './DirStyle.sass';

export class Doc {

    content: string;
    docTitle: string;
}

export class Dir {

    dirTitle: string;
    docList: Doc[];
}

const docs: Array<Dir> = JSON.parse(JSON.stringify(require('./DirConfig.json')));

function ParseDoc(props: { docs: Doc[]; }) {

    const docs = props.docs;
    const docsItems = docs.map((doc, index) =>
        <li className={"docs-li"} key={index}>{doc.docTitle}</li>
    );

    return (
        <ul className={"docs-ul"}>
            {docsItems}
        </ul>
    );

}

// 遍历ul
function DirectoryDiv(props: { dirs: Dir[]; }) {

    const dirs = props.dirs;
    const dirItems = dirs.map((dir,index) =>
        <ParseDoc key={index} docs={dir.docList}/>
    );
    return (
        <div className={"dir"}>
            {dirItems}
        </div>
    );
}
export default class Directory extends React.Component {

    render() {
        return <DirectoryDiv dirs={docs}/>;
    }
};
