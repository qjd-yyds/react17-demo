import { useState } from 'react';
import Gif from './SortableItem';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
// 子项目
const SortGif = sortableElement(({ gif }) => {
  return <Gif gif={gif} key={gif}></Gif>;
});
// 容器
const SortContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});
function Sortable() {
  const [gifs, setGifs] = useState([
    'https://media.giphy.com/media/3ohhwoWSCtJzznXbuo/giphy.gif',
    'https://media.giphy.com/media/l46CbZ7KWEhN1oci4/giphy.gif',
    'https://media.giphy.com/media/3ohzgD1wRxpvpkDCSI/giphy.gif',
    'https://media.giphy.com/media/xT1XGYy9NPhWRPp4pq/giphy.gif'
  ]);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    const list = [...gifs];
    const tem = list[oldIndex]; // 被移动的子项
    // old小于new，说明右移动
    if (oldIndex < newIndex) {
      list.splice(newIndex + 1, 0, tem);
      list.splice(oldIndex, 1);
    } else {
      // old大于new，说明左移动
      list.splice(oldIndex, 1);
      list.splice(newIndex, 0, tem);
    }
    setGifs(list);
  };
  return (
    <div className='sort'>
      <h1>Drag those GIFs around</h1>
      <h2>Set 1</h2>
      <SortContainer axis='xy' onSortEnd={onSortEnd}>
        {gifs.map((item, index) => {
          return <SortGif gif={item} key={item} index={index}></SortGif>;
        })}
      </SortContainer>
    </div>
  );
}

export default Sortable;
