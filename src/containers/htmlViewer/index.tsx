import { connect } from "react-redux";
import {
  handleActionDialog,
  handleReadingState,
  handleReadingBook,
  handleHtmlBook,
  handleRenderFunc,
  handleFetchBooks,
  handleCurrentChapter,
  handleFetchNotes,
  handleFetchBookmarks,
  handleFetchPercentage,
} from "../../store/actions";
import Viewer from "./component";
import { stateType } from "../../store";
import { withTranslation } from "react-i18next";

const mapStateToProps = (state: stateType) => {
  return {
    isOpenActionDialog: state.book.isOpenActionDialog,
    currentBook: state.book.currentBook,
    isReading: state.book.isReading,
    htmlBook: state.reader.htmlBook,
    books: state.manager.books,
  };
};
const actionCreator = {
  handleReadingState,
  handleReadingBook,
  handleActionDialog,
  handleHtmlBook,
  handleRenderFunc,
  handleFetchBooks,
  handleCurrentChapter,
  handleFetchNotes,
  handleFetchBookmarks,
  handleFetchPercentage,
};
export default connect(
  mapStateToProps,
  actionCreator
)(withTranslation()(Viewer as any));
