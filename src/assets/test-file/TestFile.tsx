import { render } from "@testing-library/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { url } from "inspector";
import { Component } from "react";
import { URL } from "url";
import "../../assets/test-file/TestFile.scss";
import { SvgIcon } from "@mui/material";

type Props = {
  image: string;
};

type State = {
  count: number;
  liked: boolean;
};

class TestFile extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 1,
      liked: false,
    };

    this.onIncrementClick = this.onIncrementClick.bind(this);
  }

  onIncrementClick() {
    this.setState((prevState: State) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { image } = this.props;
    return (
      <div className="qwert">
        <div className="like-btn">
          <div className="like-wrapper">
            <div  onClick={this.onIncrementClick}>
              <FavoriteBorderIcon />
              {/* <span className={this.state.color}>{this.state.color}</span> */}
            </div>
            <span>{this.state.count}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TestFile;
