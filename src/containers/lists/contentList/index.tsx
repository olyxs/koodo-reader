import { connect } from "react-redux";
import { stateType } from "../../../store";
import ContentList from "./component";
import { handleCurrentChapter } from "../../../store/actions";
const mapStateToProps = (state: stateType) => {
  return {
    currentBook: state.book.currentBook,
    chapters: state.reader.chapters,
    htmlBook: state.reader.htmlBook,
    renderFunc: state.book.renderFunc,
  };
};
const actionCreator = { handleCurrentChapter };
export default connect(mapStateToProps, actionCreator)(ContentList);
