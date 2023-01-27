import { log } from "console";
import { DateTime } from "luxon";

const enUSFormatter = new Intl.DateTimeFormat('en-UK');
let now:Date = new Date();
let expire:Date =  new Date(60000*15)
let expire2:Date =  new Date(60000*15 + now.getTime())

log(enUSFormatter.format(now));
log("Date = " + now);
log("Date = " + now.toUTCString());
log("Date = " + expire);
log("Date = " + expire2);

log(now.getTime());
log(expire.getTime());
log(expire2.getTime());

//log(DateTime.now())
log(DateTime.now().toISO())
//log(DateTime.utc())
log(DateTime.utc().toISO())
log(DateTime.utc().toJSDate());
log(DateTime.utc().toJSON());
log(enUSFormatter.format(DateTime.utc().toJSDate()))
log(DateTime.utc().setZone('America/New_York').toISO())