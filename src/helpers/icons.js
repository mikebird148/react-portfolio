import {
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner, 
    faPlusSquare,
    faPhoneSquareAlt,
    faEnvelopeSquare,
    faMapMarkedAlt,
    faLock,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusSquare, faPhoneSquareAlt, faEnvelopeSquare, faMapMarkedAlt, faLock, faEnvelope);
};

export default Icons;