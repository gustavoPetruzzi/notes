import { memo } from 'react';
import { BookmarkSize } from './bookmark-size';
import styles from './Bookmark.module.scss';

interface Props {
  size: BookmarkSize,
}
const getBookmarkClassNameSize = (size: BookmarkSize) => {
  const className = {
    [BookmarkSize.SMALL] : styles.bookmark__small,
    [BookmarkSize.MEDIUM] : styles.bookmark__medium,
    [BookmarkSize.LARGE] : styles.bookmark__large
  }
  return className[size];
}

const BookmarkComponent = (props: Props) => {
  const bookmarkSizeClassname = getBookmarkClassNameSize(props.size);

  return (
    <div className={`${styles.bookmark} ${bookmarkSizeClassname}`}></div>
  )
}

export const Bookmark = memo(BookmarkComponent);