import { memo } from 'react';
import { BookmarkSize } from './bookmark-size';
import styles from './Bookmark.module.scss';

interface Props {
  size: BookmarkSize;
  children?: React.ReactNode
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
  const {children, size} = props;
  const bookmarkClassname = getBookmarkClassNameSize(size);
  return (
    <div className={styles.container}>
      <div className={`${styles.bookmark} ${bookmarkClassname}`}></div>
        { children }
    </div>
  )
}

export const Bookmark = memo(BookmarkComponent);