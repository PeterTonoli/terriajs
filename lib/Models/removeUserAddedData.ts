import { BaseModel } from "./Model";
import Terria from "./Terria";
import CommonStrata from "./CommonStrata";

/**
 * Remove a user added data item or group
 */
var removeUserAddedData = function(terria: Terria, target: BaseModel) {
  terria.catalog.userAddedDataGroup.remove(CommonStrata.user, target);
};

module.exports = removeUserAddedData;
