import { BehaviorSubject, Subject } from "@reactivex/rxjs/dist/package";

const TOPICS = {
  LOGGEDIN_TOPIC: new Subject(),
  LANGUAGE_TOPIC: new Subject(),
  TOASTS_TOPIC: new Subject(),
  ROLE_TOPIC: new Subject(),
  SIDEBAR_TOPIC: new Subject(),
  MODAL_TOPIC: new Subject(),
  MODAL_TOPIC_CLOSE: new Subject(),
  BACKDROP_TOPIC: new Subject(),
  DIAGNOSTIC_TOPIC: new Subject(),
  SET_DIAGNOSTIC_TOPIC: new Subject(),
  SET_DIAGNOSTIC_CONTENT_TOPIC: new Subject(),
  FETCH_DATA_TOPIC: new Subject(),
  CLEAR_TOPIC_VALUES: { DELETE: "DELETE", CANCEL: "CANCEL" },
  CLEAR_LOCAL_DATA_TOPIC: new Subject(),
  GP_PAGINATION: new Subject(),
  GP_FINISHED: new Subject()
};

// references pub/sub
export const REFERENCES = {};
/**
 * This function will search the inside the topics object for a reference subject
 * if the subject is not found, it will create a new one with the given default value
 * @param population
 * @param domain
 * @param datasection
 * @param name
 * @param defaultValue
 * @returns {BehaviorSubject<string>}
 */
export const getReference = (population, domain, datasection, name, defaultValue = "") => {
  let subject;
  const index = `${population}/${domain}/${datasection}/${name}`;
  subject = REFERENCES[index];
  if (!subject) {
    subject = new BehaviorSubject(defaultValue);
    REFERENCES[index] = subject;
  }
  return subject;
};

/**
 * This function will search inside the topics object and send a complete() call
 * to all subscribers to finally delete the property from the topics object
 * @param population
 * @param domain
 * @param datasection
 * @param name
 */
export const clearReference = (population, domain, datasection, name) => {
  const index = `${population}/${domain}/${datasection}/${name}`;
  const subject = REFERENCES[index];
  if (subject && subject instanceof BehaviorSubject) subject.complete();
  // cleanup object
  delete REFERENCES[index];
};

export default TOPICS;
