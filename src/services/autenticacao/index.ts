import RegistoModel from "./model/Registo.model";
import RegistoService from "./Registo.service";

const registoService = new RegistoService(new RegistoModel());

export { registoService };
