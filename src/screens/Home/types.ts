import {Props as HeaderProps} from "./Components/Header/types"

class Controller {
    private static _captureButtonLabel = "Capture";
    private static _headerTitle = "Choose your Image";
    private static _headerDescription = "You can select your image using one of the options which you want to convert to passport size"
    
    static get captureButtonLabel(): string {
        return this._captureButtonLabel;
    }

    static get headerTitle(): string {
        return this._headerTitle;
    }

    static get headerDescription():string {
        return this._headerDescription;
    }

    static get headerProps(): HeaderProps {
        const props: HeaderProps = {
            title: this._headerTitle,
            description: this._headerDescription
        };

        return props;
    }
}

export default Controller