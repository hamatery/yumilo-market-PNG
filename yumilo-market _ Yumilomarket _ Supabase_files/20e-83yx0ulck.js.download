;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="a704300b-3925-7230-6c52-282c4e096239")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,977264,189723,e=>{"use strict";e.i(850036);var t=e.i(479084),n=e.i(55956),a=e.i(531837),r=e.i(249909),i=e.i(562616);function o(e){return e&&(0,n.default)(e).isValid()?e:null}e.s(["isoDateTimeString",0,o],189723);let s=a.string().transform((e,t)=>{let n=o(e);return null===n?(t.addIssue({code:r.ZodIssueCode.custom,message:"must be a valid ISO-8601 datetime"}),a.NEVER):n}),l=a.object({type:a.enum(["bar","line"]),x_column:a.string(),y_series:a.array(a.string()).max(3),cumulative:a.boolean(),scale:a.enum(["linear","log"]).default("linear"),show_labels:a.boolean()}),c=a.object({_tag:a.literal("absolute_time_range"),start:s,end:s}),d=a.object({_tag:a.literal("relative_time_range"),unit:a.enum(["minute","hour","day","week","month","year"]),amount:a.number().int().positive()}),_=a.discriminatedUnion("_tag",[c,d]).refine(e=>{if("absolute_time_range"!==e._tag)return!0;let t=(0,n.default)(e.start),a=(0,n.default)(e.end);return!(t.isValid()&&a.isValid())||a.isAfter(t)},{message:"must be later than the start of the range",path:["end"]}),m=a.string().optional().transform(e=>""===e?void 0:e),p=a.object({database_identifier:m}),u=a.object({time_range:_}),E=a.object({text:a.string()}),g=a.object({title:a.string().optional(),view:a.enum(["table","chart"]).optional(),chart:l.optional()}),f=g.extend({sql:a.string(),row_limit:a.number(),...p.shape}),h=g.extend({sql:a.string(),...u.shape}),b=E.extend({_tag:a.literal("markdown_cell"),_id:a.string()}),N=f.extend({_tag:a.literal("database_cell"),_id:a.string()}),$=h.extend({_tag:a.literal("log_cell"),_id:a.string()}),v=a.discriminatedUnion("_tag",[b,N,$]),T=a.object({schema_version:a.literal(1),cells:a.array(v)}),S=a.discriminatedUnion("_tag",[E.extend({_tag:a.literal("markdown_cell"),_id:a.string().optional()}),f.extend({_tag:a.literal("database_cell"),_id:a.string().optional()}),h.extend({_tag:a.literal("log_cell"),_id:a.string().optional()})]),I=a.object({schema_version:a.literal(1),cells:a.array(S)}),A=a.discriminatedUnion("_tag",[E.extend({_tag:a.literal("markdown_cell")}).strict(),f.extend({_tag:a.literal("database_cell")}).strict(),h.extend({_tag:a.literal("log_cell")}).strict()]),y=a.object({schema_version:a.literal(1),cells:a.array(A)}),O="draft-",R=v.transform(e=>{switch(e._tag){case"markdown_cell":return e;case"database_cell":{let{sql:n,view:a,...r}=e;return{...r,view:a??"table",unchecked_sql:(0,t.untrustedSql)(n)}}case"log_cell":{let{sql:t,view:n,...a}=e;return{...a,view:n??"table",unchecked_sql:(0,i.untrustedLogSql)(t)}}}}),L=a.object({schema_version:a.literal(1),cells:a.array(R)});function w(e){switch(e._tag){case"markdown_cell":return e;case"database_cell":case"log_cell":{let{unchecked_sql:t,...n}=e;return{...n,sql:t}}}}function C(e){switch(e._tag){case"markdown_cell":case"log_cell":case"database_cell":{var t;let{_id:n,...a}=e;return{...a,...void 0===(t=n)||t.startsWith(O)?{}:{_id:t}}}}}let D={markdown_cell:"content",database_cell:"query",log_cell:"query"};e.s(["MAX_CHART_Y_SERIES",0,3,"agentCellSchema",0,A,"agentNotebookSchema",0,y,"chartConfigSchema",0,l,"databaseSourceSchema",0,p,"generateDraftId",0,function(){return`${O}${crypto.randomUUID()}`},"isQueryCell",0,e=>"query"===D[e._tag],"logsSourceSchema",0,u,"notebookDomainSchema",0,L,"notebookSchema",0,T,"toWireNotebook",0,function(e){return{schema_version:e.schema_version,cells:e.cells.map(w)}},"toWireWritableNotebook",0,function(e){return{schema_version:e.schema_version,cells:e.cells.map(C)}},"writableNotebookSchema",0,I],977264)},562616,e=>{"use strict";function t(e,...n){return e.reduce((e,t,a)=>e+t+(n[a]??""),"")}let n=/^[A-Za-z_][A-Za-z0-9_]*$/;e.s(["acceptUntrustedLogsSql",0,function(e){return e},"analyticsLiteral",0,function(e){if("number"==typeof e){if(!Number.isFinite(e))throw Error("analyticsLiteral: non-finite numbers are not supported");return String(e)}if("boolean"==typeof e)return e?t`true`:t`false`;if("string"!=typeof e)throw Error("analyticsLiteral: only string, number, or boolean inputs are supported");let n="";for(let t of e)"'"===t?n+="''":"\\"===t?n+="\\\\":n+=t;return`'${n}'`},"joinSqlFragments",0,function(e,t){return e.join(t)},"quotedIdent",0,function(e){let t=e.split(".");if(0===t.length||t.some(e=>!n.test(e)))throw Error(`quotedIdent: invalid identifier "${e}"`);return t.map(e=>"`"+e+"`").join(".")},"safeSql",0,t,"untrustedLogSql",0,function(e){return e}])},55956,(e,t,n)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",n="minute",a="hour",r="week",i="month",o="quarter",s="year",l="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},p="en",u={};u[p]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}};var E="$isDayjsObject",g=function(e){return e instanceof N||!(!e||!e[E])},f=function e(t,n,a){var r;if(!t)return p;if("string"==typeof t){var i=t.toLowerCase();u[i]&&(r=i),n&&(u[i]=n,r=i);var o=t.split("-");if(!r&&o.length>1)return e(o[0])}else{var s=t.name;u[s]=t,r=s}return!a&&r&&(p=r),r||!a&&p},h=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new N(n)},b={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+m(Math.floor(n/60),2,"0")+":"+m(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(a,i),o=n-r<0,s=t.clone().add(a+(o?-1:1),i);return+(-(a+(n-r)/(o?r-s:s-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:i,y:s,w:r,d:"day",D:l,h:a,m:n,s:t,ms:e,Q:o})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};b.l=f,b.i=g,b.w=function(e,t){return h(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var N=function(){function m(e){this.$L=f(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[E]=!0}var p=m.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(d);if(a){var r=a[2]-1||0,i=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return b},p.isValid=function(){return this.$d.toString()!==c},p.isSame=function(e,t){var n=h(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return h(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<h(e)},p.$g=function(e,t,n){return b.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,o){var c=this,d=!!b.u(o)||o,_=b.p(e),m=function(e,t){var n=b.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return d?n:n.endOf("day")},p=function(e,t){return b.w(c.toDate()[e].apply(c.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},u=this.$W,E=this.$M,g=this.$D,f="set"+(this.$u?"UTC":"");switch(_){case s:return d?m(1,0):m(31,11);case i:return d?m(1,E):m(0,E+1);case r:var h=this.$locale().weekStart||0,N=(u<h?u+7:u)-h;return m(d?g-N:g+(6-N),E);case"day":case l:return p(f+"Hours",0);case a:return p(f+"Minutes",1);case n:return p(f+"Seconds",2);case t:return p(f+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(r,o){var c,d=b.p(r),_="set"+(this.$u?"UTC":""),m=((c={}).day=_+"Date",c[l]=_+"Date",c[i]=_+"Month",c[s]=_+"FullYear",c[a]=_+"Hours",c[n]=_+"Minutes",c[t]=_+"Seconds",c[e]=_+"Milliseconds",c)[d],p="day"===d?this.$D+(o-this.$W):o;if(d===i||d===s){var u=this.clone().set(l,1);u.$d[m](p),u.init(),this.$d=u.set(l,Math.min(this.$D,u.daysInMonth())).$d}else m&&this.$d[m](p);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[b.p(e)]()},p.add=function(e,o){var l,c=this;e=Number(e);var d=b.p(o),_=function(t){var n=h(c);return b.w(n.date(n.date()+Math.round(t*e)),c)};if(d===i)return this.set(i,this.$M+e);if(d===s)return this.set(s,this.$y+e);if("day"===d)return _(1);if(d===r)return _(7);var m=((l={})[n]=6e4,l[a]=36e5,l[t]=1e3,l)[d]||1,p=this.$d.getTime()+e*m;return b.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var a=e||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),i=this.$H,o=this.$m,s=this.$M,l=n.weekdays,d=n.months,m=n.meridiem,p=function(e,n,r,i){return e&&(e[n]||e(t,a))||r[n].slice(0,i)},u=function(e){return b.s(i%12||12,e,"0")},E=m||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a};return a.replace(_,function(e,a){return a||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return s+1;case"MM":return b.s(s+1,2,"0");case"MMM":return p(n.monthsShort,s,d,3);case"MMMM":return p(d,s);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(n.weekdaysMin,t.$W,l,2);case"ddd":return p(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return b.s(i,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return E(i,o,!0);case"A":return E(i,o,!1);case"m":return String(o);case"mm":return b.s(o,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(e,l,c){var d,_=this,m=b.p(l),p=h(e),u=(p.utcOffset()-this.utcOffset())*6e4,E=this-p,g=function(){return b.m(_,p)};switch(m){case s:d=g()/12;break;case i:d=g();break;case o:d=g()/3;break;case r:d=(E-u)/6048e5;break;case"day":d=(E-u)/864e5;break;case a:d=E/36e5;break;case n:d=E/6e4;break;case t:d=E/1e3;break;default:d=E}return c?d:b.a(d)},p.daysInMonth=function(){return this.endOf(i).$D},p.$locale=function(){return u[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=f(e,t,!0);return a&&(n.$L=a),n},p.clone=function(){return b.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),$=N.prototype;return h.prototype=$,[["$ms",e],["$s",t],["$m",n],["$H",a],["$W","day"],["$M",i],["$y",s],["$D",l]].forEach(function(e){$[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),h.extend=function(e,t){return e.$i||(e(t,N,h),e.$i=!0),h},h.locale=f,h.isDayjs=g,h.unix=function(e){return h(1e3*e)},h.en=u[p],h.Ls=u,h.p={},h}()},850036,479084,643135,332357,721490,247309,387578,640696,517638,53336,33942,957386,779262,538892,190804,788035,389273,e=>{"use strict";var t,n=e.i(97429);let a=new Set(["AES128","AES256","ALL","ALLOWOVERWRITE","ANALYSE","ANALYZE","AND","ANY","ARRAY","AS","ASC","ASYMMETRIC","AUTHORIZATION","BACKUP","BETWEEN","BIGINT","BINARY","BIT","BLANKSASNULL","BOOLEAN","BOTH","BYTEDICT","CASE","CAST","CHAR","CHARACTER","CHECK","COALESCE","COLLATE","COLLATION","COLUMN","CONCURRENTLY","CONSTRAINT","CREATE","CREDENTIALS","CROSS","CURRENT_CATALOG","CURRENT_DATE","CURRENT_ROLE","CURRENT_SCHEMA","CURRENT_TIME","CURRENT_TIMESTAMP","CURRENT_USER_ID","CURRENT_USER","DEC","DECIMAL","DEFAULT","DEFERRABLE","DEFLATE","DEFRAG","DELETE","DELTA","DELTA32K","DESC","DISABLE","DISTINCT","DO","ELSE","EMPTYASNULL","ENABLE","ENCODE","ENCRYPT","ENCRYPTION","END","EXCEPT","EXISTS","EXPLICIT","EXTRACT","FALSE","FETCH","FLOAT","FOR","FOREIGN","FREEZE","FROM","FULL","GLOBALDICT256","GLOBALDICT64K","GRANT","GREATEST","GROUP","GROUPING","GZIP","HAVING","IDENTITY","IGNORE","ILIKE","IN","INITIALLY","INNER","INOUT","INSERT","INT","INTEGER","INTERSECT","INTERVAL","INTO","IS","ISNULL","JOIN","JSON_ARRAY","JSON_ARRAYAGG","JSON_EXISTS","JSON_OBJECT","JSON_OBJECTAGG","JSON_QUERY","JSON_SCALAR","JSON_SERIALIZE","JSON_TABLE","JSON_VALUE","JSON","LATERAL","LEADING","LEAST","LEFT","LIKE","LIMIT","LOCALTIME","LOCALTIMESTAMP","LUN","LUNS","LZO","LZOP","MERGE_ACTION","MINUS","MOSTLY13","MOSTLY32","MOSTLY8","NATIONAL","NATURAL","NCHAR","NEW","NONE","NORMALIZE","NOT","NOTNULL","NULL","NULLIF","NULLS","NUMERIC","OFF","OFFLINE","OFFSET","OLD","ON","ONLY","OPEN","OR","ORDER","OUT","OUTER","OVERLAPS","OVERLAY","PARALLEL","PARTITION","PERCENT","PLACING","POSITION","PRECISION","PRIMARY","RAW","READRATIO","REAL","RECOVER","REFERENCES","REJECTLOG","RESORT","RESTORE","RETURNING","RIGHT","ROW","SELECT","SESSION_USER","SETOF","SIMILAR","SMALLINT","SOME","SUBSTRING","SYMMETRIC","SYSDATE","SYSTEM_USER","SYSTEM","TABLE","TABLESAMPLE","TAG","TDES","TEXT255","TEXT32K","THEN","TIME","TIMESTAMP","TO","TOP","TRAILING","TREAT","TRIM","TRUE","TRUNCATECOLUMNS","UNION","UNIQUE","UPDATE","USER","USING","VALUES","VARCHAR","VARIADIC","VERBOSE","WALLET","WHEN","WHERE","WINDOW","WITH","WITHOUT","XMLATTRIBUTES","XMLCONCAT","XMLELEMENT","XMLEXISTS","XMLFOREST","XMLNAMESPACES","XMLPARSE","XMLPI","XMLROOT","XMLSERIALIZE","XMLTABLE"]);function r(e){return e.replace("T"," ").replace("Z","+00")}function i(e,t,n){let a=_``;for(let[e,r]of(a=_`${a} (`,t.entries()))a=_`${a}${0===e?_``:_`, `}${n(r)}`;return _`${a})`}function o(e){if(null==e)throw Error("SQL identifier cannot be null or undefined");if(!1===e)return'"f"';if(!0===e)return'"t"';if(e instanceof Date)return _`"${r(e.toISOString())}"`;if(Array.isArray(e)){let t=[];for(let n of e)if(!0===Array.isArray(n))throw TypeError("Nested array to grouped list conversion is not supported for SQL identifier");else t.push(o(n));return t.toString()}else if(e===Object(e))throw Error("SQL identifier cannot be an object");let t=String(e).slice(0);if(!0===/^[_a-z][\d$_a-z]*$/.test(t)&&!1==!!a.has(t.toUpperCase()))return t;let n='"';for(let e of t)n+='"'===e?e+e:e;return n+'"'}function s(e){let t,n="";if(null==e)return"NULL";if("bigint"==typeof e)return BigInt(e).toString();if(e===1/0)return"'Infinity'";if(e===-1/0)return"'-Infinity'";if(Number.isNaN(e))return"'NaN'";if("number"==typeof e)return Number(e).toString();if(!1===e)return"'f'";if(!0===e)return"'t'";if(e instanceof Date)return _`'${r(e.toISOString())}'`;if(Array.isArray(e)){let t=[];for(let[n,a]of e.entries())!0===Array.isArray(a)?t.push(i(0!==n,a,s)):t.push(s(a));return t.toString()}e===Object(e)?(t="jsonb",n=JSON.stringify(e)):n=String(e).slice(0);let a=!1,o="'";for(let e of n)"'"===e?o+=e+e:"\\"===e?(o+=e+e,a=!0):o+=e;return o+="'",!0===a&&(o=`E${o}`),t&&(o+=`::${t}`),o}let l=new Set(["INSTEAD OF","BY DEFAULT"]);function c(e){if(/^[A-Za-z][A-Za-z0-9_]*$/.test(e)||l.has(e.toUpperCase()))return e;throw Error(`Not a valid keyword: "${e}". Must be a single word matching [A-Za-z][A-Za-z0-9_]*, or one of: ${[...l].join(", ")}.`)}function d(e,...t){let n,a;return n=0,a=RegExp("%(%|(\\d+\\$)?[ILs])","g"),e.replace(a,(e,a)=>{if("%"===a)return _`%`;let l=n,c=a.split("$");if(c.length>1&&(l=Number.parseInt(c[0],10)-1,a=c[1]),l<0)throw Error("specified argument 0 but arguments start at 1");if(l>t.length-1)throw Error("too few arguments");if(n=l+1,"I"===a)return o(t[l]);if("L"===a)return s(t[l]);if("s"===a)return function e(t){if(null==t)return _``;if(!1===t)return _`f`;if(!0===t)return _`t`;if(t instanceof Date)return r(t.toISOString());if(Array.isArray(t)){let n=[];for(let[a,r]of t.entries())null!=r&&(!0===Array.isArray(r)?n.push(i(0!==a,r,e)):n.push(e(r)));return n.toString()}return t&&"object"==typeof t?JSON.stringify(t):String(t).toString().slice(0)}(t[l]);throw Error(`unsupported format type: ${a}`)})}function _(e,...t){return e.reduce((e,n,a)=>e+n+(t[a]??""),"")}function m(e){return e}function p(e,t){return e.join(t)}e.s(["acceptUntrustedSql",0,function(e){return e},"format",0,d,"ident",0,o,"joinSqlFragments",0,p,"keyword",0,c,"literal",0,s,"rawSql",0,m,"safeSql",0,_,"untrustedSql",0,function(e){return e}],479084);var u=e.i(248593);let E=(e,t,n)=>{let a=n?_` ORDER BY ${n}`:_``;return _`
COALESCE(
  (
    SELECT
      array_agg(row_to_json(${o(e)})${a}) FILTER (WHERE ${t})
    FROM
      ${o(e)}
  ),
  '{}'
) AS ${o(e)}`};function g(e,t,n){return(n&&(t=n.concat(t??[])),e?.length)?_`IN (${p(e.map(s),",")})`:t?.length?_`NOT IN (${p(t.map(s),",")})`:_``}let f=e=>e.replace(/([\\%_])/g,"\\$1");e.s(["coalesceRowsToArray",0,E,"escapeIlikeLiteral",0,f,"filterByList",0,g],643135);let h=n.z.object({grantor:n.z.string(),grantee:n.z.string(),privilege_type:n.z.union([n.z.literal("SELECT"),n.z.literal("INSERT"),n.z.literal("UPDATE"),n.z.literal("REFERENCES")]),is_grantable:n.z.boolean()}),b=n.z.object({column_id:n.z.string(),relation_schema:n.z.string(),relation_name:n.z.string(),column_name:n.z.string(),privileges:n.z.array(h)}),N=n.z.array(b);n.z.object({columnId:n.z.string(),grantee:n.z.string(),privilegeType:n.z.union([n.z.literal("ALL"),n.z.literal("SELECT"),n.z.literal("INSERT"),n.z.literal("UPDATE"),n.z.literal("REFERENCES")]),isGrantable:n.z.boolean().optional()});let $=_`(select n.nspname from pg_class c join pg_namespace n on n.oid = c.relnamespace where c.oid = col.attrelid), (select relname from pg_class where oid = col.attrelid)`;function v(e){return"public"===e.toLowerCase()?_`public`:o(e)}let T={oid:_`c.oid`},S=({filter:e}={})=>{let t=e?_`AND ${T[e.column]} ${e.predicate}`:_``;return _`
-- Adapted from information_schema.columns

SELECT
  c.oid :: int8 AS table_id,
  nc.nspname AS schema,
  c.relname AS table,
  (c.oid || '.' || a.attnum) AS id,
  a.attnum AS ordinal_position,
  a.attname AS name,
  CASE
    WHEN a.atthasdef THEN pg_get_expr(ad.adbin, ad.adrelid)
    ELSE NULL
  END AS default_value,
  CASE
    WHEN t.typtype = 'd' THEN CASE
      WHEN bt.typelem <> 0 :: oid
      AND bt.typlen = -1 THEN 'ARRAY'
      WHEN nbt.nspname = 'pg_catalog' THEN format_type(t.typbasetype, NULL)
      ELSE 'USER-DEFINED'
    END
    ELSE CASE
      WHEN t.typelem <> 0 :: oid
      AND t.typlen = -1 THEN 'ARRAY'
      WHEN nt.nspname = 'pg_catalog' THEN format_type(a.atttypid, NULL)
      ELSE 'USER-DEFINED'
    END
  END AS data_type,
  COALESCE(bt.typname, t.typname) AS format,
  COALESCE(nbt.nspname, nt.nspname) AS format_schema,
  a.attidentity IN ('a', 'd') AS is_identity,
  CASE
    a.attidentity
    WHEN 'a' THEN 'ALWAYS'
    WHEN 'd' THEN 'BY DEFAULT'
    ELSE NULL
  END AS identity_generation,
  a.attgenerated IN ('s') AS is_generated,
  NOT (
    a.attnotnull
    OR t.typtype = 'd' AND t.typnotnull
  ) AS is_nullable,
  (
    c.relkind IN ('r', 'p')
    OR c.relkind IN ('v', 'f') AND pg_column_is_updatable(c.oid, a.attnum, FALSE)
  ) AS is_updatable,
  uniques.table_id IS NOT NULL AS is_unique,
  check_constraints.definition AS "check",
  array_to_json(
    array(
      SELECT
        enumlabel
      FROM
        pg_catalog.pg_enum enums
      WHERE
        enums.enumtypid = coalesce(bt.oid, t.oid)
        OR enums.enumtypid = coalesce(bt.typelem, t.typelem)
      ORDER BY
        enums.enumsortorder
    )
  ) AS enums,
  col_description(c.oid, a.attnum) AS comment
FROM
  pg_attribute a
  LEFT JOIN pg_attrdef ad ON a.attrelid = ad.adrelid
  AND a.attnum = ad.adnum
  JOIN (
    pg_class c
    JOIN pg_namespace nc ON c.relnamespace = nc.oid
  ) ON a.attrelid = c.oid
  JOIN (
    pg_type t
    JOIN pg_namespace nt ON t.typnamespace = nt.oid
  ) ON a.atttypid = t.oid
  LEFT JOIN (
    pg_type bt
    JOIN pg_namespace nbt ON bt.typnamespace = nbt.oid
  ) ON t.typtype = 'd'
  AND t.typbasetype = bt.oid
  LEFT JOIN (
    SELECT DISTINCT ON (table_id, ordinal_position)
      conrelid AS table_id,
      conkey[1] AS ordinal_position
    FROM pg_catalog.pg_constraint
    WHERE contype = 'u' AND cardinality(conkey) = 1
  ) AS uniques ON uniques.table_id = c.oid AND uniques.ordinal_position = a.attnum
  LEFT JOIN (
    -- We only select the first column check
    SELECT DISTINCT ON (table_id, ordinal_position)
      conrelid AS table_id,
      conkey[1] AS ordinal_position,
      substring(
        pg_get_constraintdef(pg_constraint.oid, true),
        8,
        length(pg_get_constraintdef(pg_constraint.oid, true)) - 8
      ) AS "definition"
    FROM pg_constraint
    WHERE contype = 'c' AND cardinality(conkey) = 1
    ORDER BY table_id, ordinal_position, oid asc
  ) AS check_constraints ON check_constraints.table_id = c.oid AND check_constraints.ordinal_position = a.attnum
WHERE
  NOT pg_is_other_temp_schema(nc.oid)
  AND a.attnum > 0
  AND NOT a.attisdropped
  AND (c.relkind IN ('r', 'v', 'm', 'f', 'p'))
  AND (
    pg_has_role(c.relowner, 'USAGE')
    OR has_column_privilege(
      c.oid,
      a.attnum,
      'SELECT, INSERT, UPDATE, REFERENCES'
    )
  )
  ${t}
`},I=S(),A=n.z.object({id:n.z.string(),table_id:n.z.number(),schema:n.z.string(),table:n.z.string(),name:n.z.string(),ordinal_position:n.z.number(),data_type:n.z.string(),format:n.z.string(),format_schema:n.z.string().optional(),is_identity:n.z.boolean(),identity_generation:n.z.string().nullable(),is_generated:n.z.boolean(),is_nullable:n.z.boolean(),is_updatable:n.z.boolean(),is_unique:n.z.boolean(),check:n.z.string().nullable(),default_value:n.z.any().nullable(),enums:n.z.array(n.z.string()),comment:n.z.string().nullable()}),y=n.z.array(A),O=n.z.optional(A);function R(e){let t=void 0!==e.schema?_`${o(e.schema)}.${o(e.name)}`:o(e.name);return e.isArray?_`${t}[]`:t}let L=_`
SELECT
  name,
  setting,
  category,
  TRIM(split_part(category, '/', 1)) AS group,
  TRIM(split_part(category, '/', 2)) AS subgroup,
  unit,
  short_desc,
  extra_desc,
  context,
  vartype,
  source,
  min_val,
  max_val,
  enumvals,
  boot_val,
  reset_val,
  sourcefile,
  sourceline,
  pending_restart
FROM
  pg_settings
ORDER BY
  category,
  name
`,w=n.z.object({name:n.z.string(),setting:n.z.string(),category:n.z.string(),group:n.z.string(),subgroup:n.z.string(),unit:n.z.string().nullable(),short_desc:n.z.string(),extra_desc:n.z.string().nullable(),context:n.z.string(),vartype:n.z.string(),source:n.z.string(),min_val:n.z.string().nullable(),max_val:n.z.string().nullable(),enumvals:n.z.array(n.z.string()).nullable(),boot_val:n.z.string().nullable(),reset_val:n.z.string().nullable(),sourcefile:n.z.string().nullable(),sourceline:n.z.number().nullable(),pending_restart:n.z.boolean()}),C=n.z.array(w),D=_`
SELECT
  e.name,
  n.nspname AS schema,
  e.default_version,
  x.extversion AS installed_version,
  e.comment
FROM
  pg_available_extensions() e(name, default_version, comment)
  LEFT JOIN pg_extension x ON e.name = x.extname
  LEFT JOIN pg_namespace n ON x.extnamespace = n.oid
`,z=n.z.object({name:n.z.string(),schema:n.z.string().nullable(),default_version:n.z.string(),installed_version:n.z.string().nullable(),comment:n.z.string()}),x=n.z.array(z),F=n.z.optional(z),U={list:function({limit:e,offset:t}={}){let n=D;return e&&(n=_`${n} LIMIT ${s(e)}`),t&&(n=_`${n} OFFSET ${s(t)}`),{sql:n,zod:x}},retrieve:function({name:e}){return{sql:_`${D} WHERE name = ${s(e)};`,zod:F}},create:function({name:e,schema:t,version:n,cascade:a=!1}){return{sql:_`
CREATE EXTENSION ${o(e)}
  ${void 0===t?_``:_`SCHEMA ${o(t)}`}
  ${void 0===n?_``:_`VERSION ${s(n)}`}
  ${a?_`CASCADE`:_``};`}},update:function(e,{update:t=!1,version:n,schema:a}){let r=_``;t&&(r=_`ALTER EXTENSION ${o(e)} UPDATE ${void 0===n?_``:_`TO ${s(n)}`};`);let i=void 0===a?_``:_`ALTER EXTENSION ${o(e)} SET SCHEMA ${o(a)};`;return{sql:_`BEGIN; ${r} ${i} COMMIT;`}},remove:function(e,{cascade:t=!1}={}){return{sql:_`DROP EXTENSION ${o(e)} ${t?_`CASCADE`:_`RESTRICT`};`}},zod:z},H=_`
select
  c.oid::int8 as id,
  n.nspname as schema,
  c.relname as name,
  obj_description(c.oid) as comment,
  fs.srvname as foreign_server_name,
  fdw.fdwname as foreign_data_wrapper_name,
  handler.proname as foreign_data_wrapper_handler
from
  pg_class c
  join pg_namespace n on n.oid = c.relnamespace
  inner join pg_foreign_table ft on ft.ftrelid = c.oid
  inner join pg_foreign_server fs on fs.oid = ft.ftserver
  inner join pg_foreign_data_wrapper fdw on fdw.oid = fs.srvfdw
  inner join pg_proc handler on handler.oid = fdw.fdwhandler
where
  c.relkind = 'f'
`,k=n.z.object({id:n.z.number(),schema:n.z.string(),name:n.z.string(),comment:n.z.string().nullable(),foreign_server_name:n.z.string(),foreign_data_wrapper_name:n.z.string(),foreign_data_wrapper_handler:n.z.string(),columns:y.optional()}),q=n.z.array(k),M=n.z.optional(k),j=({includeColumns:e})=>_`
with foreign_tables as (${H})
  ${e?_`, columns as (${I})`:_``}
select
  *
  ${e?_`, ${E("columns",_`columns.table_id = foreign_tables.id`)}`:_``}
from foreign_tables`,P=_`
-- CTE with sane arg_modes, arg_names, and arg_types.
-- All three are always of the same length.
-- All three include all args, including OUT and TABLE args.
with functions as (
  select
    *,
    -- proargmodes is null when all arg modes are IN
    coalesce(
      p.proargmodes,
      array_fill('i'::text, array[cardinality(coalesce(p.proallargtypes, p.proargtypes))])
    ) as arg_modes,
    -- proargnames is null when all args are unnamed
    coalesce(
      p.proargnames,
      array_fill(''::text, array[cardinality(coalesce(p.proallargtypes, p.proargtypes))])
    ) as arg_names,
    -- proallargtypes is null when all arg modes are IN
    coalesce(p.proallargtypes, p.proargtypes) as arg_types,
    array_cat(
      array_fill(false, array[pronargs - pronargdefaults]),
      array_fill(true, array[pronargdefaults])) as arg_has_defaults
  from
    pg_proc as p
  where
    p.prokind in ('f', 'p')
)
select
  f.oid as id,
  n.nspname as schema,
  f.proname as name,
  l.lanname as language,
  case f.prokind
    when 'f' then 'function'
    when 'p' then 'procedure'
    when 'a' then 'aggregate'
    when 'w' then 'window'
    else 'unknown'
  end as type,
  case
    when l.lanname = 'internal' then ''
    else f.prosrc
  end as definition,
  case
    when l.lanname = 'internal' then f.prosrc
    else pg_get_functiondef(f.oid)
  end as complete_statement,
  coalesce(f_args.args, '[]') as args,
  pg_get_function_arguments(f.oid) as argument_types,
  pg_get_function_identity_arguments(f.oid) as identity_argument_types,
  f.prorettype as return_type_id,
  pg_get_function_result(f.oid) as return_type,
  nullif(rt.typrelid, 0) as return_type_relation_id,
  f.proretset as is_set_returning_function,
  case
    when f.provolatile = 'i' then 'IMMUTABLE'
    when f.provolatile = 's' then 'STABLE'
    when f.provolatile = 'v' then 'VOLATILE'
  end as behavior,
  f.prosecdef as security_definer,
  f_config.config_params as config_params
from
  functions f
  left join pg_namespace n on f.pronamespace = n.oid
  left join pg_language l on f.prolang = l.oid
  left join pg_type rt on rt.oid = f.prorettype
  left join (
    select
      oid,
      jsonb_object_agg(param, value) filter (where param is not null) as config_params
    from
      (
        select
          oid,
          (string_to_array(unnest(proconfig), '='))[1] as param,
          (string_to_array(unnest(proconfig), '='))[2] as value
        from
          functions
      ) as t
    group by
      oid
  ) f_config on f_config.oid = f.oid
  left join (
    select
      oid,
      jsonb_agg(jsonb_build_object(
        'mode', t2.mode,
        'name', name,
        'type_id', type_id,
        -- Cast null into false boolean
        'has_default', COALESCE(has_default, false)
      )) as args
    from
      (
        select
          oid,
          unnest(arg_modes) as mode,
          unnest(arg_names) as name,
          -- Coming from: coalesce(p.proallargtypes, p.proargtypes) postgres won't automatically assume
          -- integer, we need to cast it to be properly parsed
          unnest(arg_types)::int8 as type_id,
          unnest(arg_has_defaults) as has_default
        from
          functions
      ) as t1,
      lateral (
        select
          case
            when t1.mode = 'i' then 'in'
            when t1.mode = 'o' then 'out'
            when t1.mode = 'b' then 'inout'
            when t1.mode = 'v' then 'variadic'
            else 'table'
          end as mode
      ) as t2
    group by
      t1.oid
  ) f_args on f_args.oid = f.oid
`,W=n.z.enum(["function","procedure"]),Y=n.z.object({id:n.z.number(),schema:n.z.string(),name:n.z.string(),language:n.z.string(),definition:n.z.string(),complete_statement:n.z.string(),args:n.z.array(n.z.object({mode:n.z.union([n.z.literal("in"),n.z.literal("out"),n.z.literal("inout"),n.z.literal("variadic"),n.z.literal("table")]),name:n.z.string(),type_id:n.z.number(),has_default:n.z.boolean()})),type:W,argument_types:n.z.string(),identity_argument_types:n.z.string(),return_type_id:n.z.number(),return_type:n.z.string(),return_type_relation_id:n.z.union([n.z.number(),n.z.null()]),is_set_returning_function:n.z.boolean(),behavior:n.z.union([n.z.literal("IMMUTABLE"),n.z.literal("STABLE"),n.z.literal("VOLATILE")]),security_definer:n.z.boolean(),config_params:n.z.union([n.z.record(n.z.string(),n.z.string()),n.z.null()])}),B=n.z.array(Y),G=n.z.optional(Y),J=n.z.object({name:n.z.string(),definition:n.z.string(),type:W.optional(),args:n.z.array(n.z.string()).optional(),behavior:n.z.enum(["IMMUTABLE","STABLE","VOLATILE"]).optional(),config_params:n.z.record(n.z.string(),n.z.string()).optional(),schema:n.z.string().optional(),language:n.z.string().optional(),return_type:n.z.string().optional(),security_definer:n.z.boolean().optional()});function X(e){return e.split(".").map(o).reduce((e,t,n)=>0===n?t:_`${e}.${t}`,_``)}function V({name:e,schema:t,args:n,definition:a,return_type:r,language:i,behavior:l,security_definer:d,config_params:m,type:u="function"},{replace:E=!1}={}){let g="procedure"===u,f=n&&n.length>0?p(n,", "):_``,h=m&&Object.keys(m).length>0?p(Object.entries(m).map(([e,t])=>"FROM CURRENT"===t?_`SET ${X(e)} FROM CURRENT`:_`SET ${X(e)} TO ${'""'===t?s(""):t}`),"\n"):_``;return _`
    CREATE ${E?_`OR REPLACE`:_``} ${g?_`PROCEDURE`:_`FUNCTION`} ${o(t)}.${o(e)}(${f})
    ${g?_``:_`RETURNS ${r}`}
    AS ${s(a)}
    LANGUAGE ${c(i)}
    ${g?_``:_`${c(l)} CALLED ON NULL INPUT`}
    ${d?_`SECURITY DEFINER`:_`SECURITY INVOKER`}
    ${h};
  `}let Q=n.z.object({name:n.z.string().optional(),schema:n.z.string().optional(),definition:n.z.string().optional()}),K=n.z.object({cascade:n.z.boolean().default(!1).optional(),type:W.optional()});e.s(["create",0,function({name:e,schema:t="public",args:a=[],definition:r,return_type:i=_`void`,language:o="sql",behavior:s="VOLATILE",security_definer:l=!1,config_params:c={},type:d="function"}){return{sql:V({name:e,schema:t,args:a,definition:r,return_type:i,language:o,behavior:s,security_definer:l,config_params:c,type:d}),zod:n.z.void()}},"list",0,function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:n,limit:a,offset:r}={}){let i=_`
    with f as (
      ${P}
    )
    select
      f.*
    from f
  `,o=g(t,n,e?void 0:u.DEFAULT_SYSTEM_SCHEMAS);return o&&(i=_`${i} where schema ${o}`),a&&(i=_`${i} limit ${s(a)}`),r&&(i=_`${i} offset ${s(r)}`),{sql:i,zod:B}},"pgFunctionArrayZod",0,B,"pgFunctionCreateZod",0,J,"pgFunctionDeleteZod",0,K,"pgFunctionOptionalZod",0,G,"pgFunctionUpdateZod",0,Q,"pgFunctionZod",0,Y,"pgRoutineKindZod",0,W,"remove",0,function(e,{cascade:t=!1}={}){let a="procedure"===e.type?_`PROCEDURE`:_`FUNCTION`;return{sql:_`DROP ${a} ${o(e.schema)}.${o(e.name)}(${e.identity_argument_types}) ${t?_`CASCADE`:_`RESTRICT`};`,zod:n.z.void()}},"retrieve",0,function({id:e,name:t,schema:n="public",args:a=[]}){if(e)return{sql:_`
      with f as (
        ${P}
      )
      select
        f.*
      from f where id = ${s(e)};`,zod:G};if(t&&n&&a){let e=a.length?_`(
          select string_agg(type_oid::text, ' ') from (
            select (
              split_args.arr[
                array_length(
                  split_args.arr,
                  1
                )
              ]::regtype::oid
            ) as type_oid from (
              select string_to_array(
                unnest(
                  array[${p(a.map(s),",")}]
                ),
                ' '
              ) as arr
            ) as split_args
          ) args
        )`:s("");return{sql:_`with f as (
      ${P}
    )
    select
      f.*
    from f join pg_proc as p on id = p.oid where schema = ${s(n)} and name = ${s(t)} and p.proargtypes::text = ${e}`,zod:G}}throw Error("Must provide either id or name and schema")},"update",0,function(e,{name:t,schema:a,definition:r}){let i=e.argument_types.split(", "),l=e.identity_argument_types,c="procedure"===e.type?_`PROCEDURE`:_`FUNCTION`,d="string"==typeof r?V({...e,definition:r,args:i,config_params:e.config_params??{},type:e.type},{replace:!0}):_``,m=t&&t!==e.name?_`ALTER ${c} ${o(e.schema)}.${o(e.name)}(${l}) RENAME TO ${o(t)};`:_``,p=a&&a!==e.schema?_`ALTER ${c} ${o(e.schema)}.${o(t||e.name)}(${l}) SET SCHEMA ${o(a)};`:_``;return{sql:_`
    DO LANGUAGE plpgsql $$
    BEGIN
      IF ${"string"==typeof r?_`TRUE`:_`FALSE`} THEN
        ${d}

        IF (
          SELECT id
          FROM (${P}) AS f
          WHERE f.schema = ${s(e.schema)}
          AND f.name = ${s(e.name)}
          AND f.identity_argument_types = ${s(l)}
        ) != ${s(e.id)} THEN
          RAISE EXCEPTION ${s(`Cannot find function "${e.schema}"."${e.name}"(${l})`)};
        END IF;
      END IF;

      ${m}

      ${p}
    END;
    $$;
  `,zod:n.z.void()}}],198687);var Z=e.i(198687);let ee=_`
  SELECT
    idx.indexrelid::int8 AS id,
    idx.indrelid::int8 AS table_id,
    n.nspname AS schema,
    idx.indnatts AS number_of_attributes,
    idx.indnkeyatts AS number_of_key_attributes,
    idx.indisunique AS is_unique,
    idx.indisprimary AS is_primary,
    idx.indisexclusion AS is_exclusion,
    idx.indimmediate AS is_immediate,
    idx.indisclustered AS is_clustered,
    idx.indisvalid AS is_valid,
    idx.indcheckxmin AS check_xmin,
    idx.indisready AS is_ready,
    idx.indislive AS is_live,
    idx.indisreplident AS is_replica_identity,
    idx.indkey::smallint[] AS key_attributes,
    idx.indcollation::integer[] AS collation,
    idx.indclass::integer[] AS class,
    idx.indoption::smallint[] AS options,
    idx.indpred AS index_predicate,
    obj_description(idx.indexrelid, 'pg_class') AS comment,
    ix.indexdef as index_definition,
    am.amname AS access_method,
    jsonb_agg(
      jsonb_build_object(
        'attribute_number', a.attnum,
        'attribute_name', a.attname,
        'data_type', format_type(a.atttypid, a.atttypmod)
      )
      ORDER BY a.attnum
    ) AS index_attributes
  FROM
    pg_index idx
    JOIN pg_class c ON c.oid = idx.indexrelid
    JOIN pg_namespace n ON c.relnamespace = n.oid
    JOIN pg_am am ON c.relam = am.oid
    JOIN pg_attribute a ON a.attrelid = c.oid AND a.attnum = ANY(idx.indkey)
    JOIN pg_indexes ix ON c.relname = ix.indexname AND n.nspname = ix.schemaname
  GROUP BY
    idx.indexrelid, idx.indrelid, n.nspname, idx.indnatts, idx.indnkeyatts, idx.indisunique, 
    idx.indisprimary, idx.indisexclusion, idx.indimmediate, idx.indisclustered, idx.indisvalid, 
    idx.indcheckxmin, idx.indisready, idx.indislive, idx.indisreplident, idx.indkey, 
    idx.indcollation, idx.indclass, idx.indoption, idx.indexprs, idx.indpred, ix.indexdef, am.amname
`,et=n.z.object({id:n.z.number(),table_id:n.z.number(),schema:n.z.string(),number_of_attributes:n.z.number(),number_of_key_attributes:n.z.number(),is_unique:n.z.boolean(),is_primary:n.z.boolean(),is_exclusion:n.z.boolean(),is_immediate:n.z.boolean(),is_clustered:n.z.boolean(),is_valid:n.z.boolean(),check_xmin:n.z.boolean(),is_ready:n.z.boolean(),is_live:n.z.boolean(),is_replica_identity:n.z.boolean(),key_attributes:n.z.array(n.z.number()),collation:n.z.array(n.z.number()),class:n.z.array(n.z.number()),options:n.z.array(n.z.number()),index_predicate:n.z.string().nullable(),comment:n.z.string().nullable(),index_definition:n.z.string(),access_method:n.z.string(),index_attributes:n.z.array(n.z.object({attribute_number:n.z.number(),attribute_name:n.z.string(),data_type:n.z.string()}))}),en=n.z.array(et),ea=n.z.optional(et),er=_`
select
  c.oid::int8 as id,
  n.nspname as schema,
  c.relname as name,
  c.relispopulated as is_populated,
  obj_description(c.oid) as comment
from
  pg_class c
  join pg_namespace n on n.oid = c.relnamespace
where
  c.relkind = 'm'
`,ei=n.z.object({id:n.z.number(),schema:n.z.string(),name:n.z.string(),is_populated:n.z.boolean(),comment:n.z.string().nullable(),columns:y.optional()}),eo=n.z.array(ei),es=n.z.optional(ei),el=({includeColumns:e})=>_`
with materialized_views as (${er})
  ${e?_`, columns as (${I})`:_``}
select
  *
  ${e?_`, ${E("columns",_`columns.table_id = materialized_views.id`)}`:_``}
from materialized_views`,ec=_`
select
  pol.oid :: int8 as id,
  n.nspname as schema,
  c.relname as table,
  c.oid :: int8 as table_id,
  pol.polname as name,
  case
    when pol.polpermissive then 'PERMISSIVE'::text
    else 'RESTRICTIVE'::text
  end as action,
  case
    when pol.polroles = '{0}'::oid[] then array_to_json(string_to_array('public'::text, ''::text)::name[])
    else array_to_json(array(
      select pg_roles.rolname
      from pg_roles
      where pg_roles.oid = any(pol.polroles)
      order by pg_roles.rolname
    ))
  end as roles,
  case pol.polcmd
    when 'r'::"char" then 'SELECT'::text
    when 'a'::"char" then 'INSERT'::text
    when 'w'::"char" then 'UPDATE'::text
    when 'd'::"char" then 'DELETE'::text
    when '*'::"char" then 'ALL'::text
    else null::text
  end as command,
  pg_get_expr(pol.polqual, pol.polrelid) as definition,
  pg_get_expr(pol.polwithcheck, pol.polrelid) as check
from
  pg_policy pol
  join pg_class c on c.oid = pol.polrelid
  left join pg_namespace n on n.oid = c.relnamespace
`,ed=n.z.object({id:n.z.number(),schema:n.z.string(),table:n.z.string(),table_id:n.z.number(),name:n.z.string(),action:n.z.union([n.z.literal("PERMISSIVE"),n.z.literal("RESTRICTIVE")]),roles:n.z.array(n.z.string()),command:n.z.union([n.z.literal("SELECT"),n.z.literal("INSERT"),n.z.literal("UPDATE"),n.z.literal("DELETE"),n.z.literal("ALL")]),definition:n.z.union([n.z.string(),n.z.null()]),check:n.z.union([n.z.string(),n.z.null()])}),e_=n.z.array(ed),em=n.z.optional(ed),ep=_`
SELECT
  p.oid :: int8 AS id,
  p.pubname AS name,
  p.pubowner::regrole::text AS owner,
  p.pubinsert AS publish_insert,
  p.pubupdate AS publish_update,
  p.pubdelete AS publish_delete,
  p.pubtruncate AS publish_truncate,
  CASE
    WHEN p.puballtables THEN NULL
    ELSE pr.tables
  END AS tables
FROM
  pg_catalog.pg_publication AS p
  LEFT JOIN LATERAL (
    SELECT
      COALESCE(
        array_agg(
          json_build_object(
            'id',
            c.oid :: int8,
            'name',
            c.relname,
            'schema',
            nc.nspname
          )
        ),
        '{}'
      ) AS tables
    FROM
      pg_catalog.pg_publication_rel AS pr
      JOIN pg_class AS c ON pr.prrelid = c.oid
      join pg_namespace as nc on c.relnamespace = nc.oid
    WHERE
      pr.prpubid = p.oid
  ) AS pr ON 1 = 1
`,eu=n.z.object({id:n.z.number().optional(),name:n.z.string(),schema:n.z.string()}),eE=n.z.object({id:n.z.number(),name:n.z.string(),owner:n.z.string(),publish_insert:n.z.boolean(),publish_update:n.z.boolean(),publish_delete:n.z.boolean(),publish_truncate:n.z.boolean(),tables:n.z.array(eu).nullable()}),eg=n.z.array(eE),ef=n.z.optional(eE);function eh(e){if(!e.includes("."))return{schema:null,name:e};let[t,...n]=e.split(".");return{schema:t,name:n.join(".")}}function eb(e){return _`array[${p(e.map(e=>s(e)),", ")}]::text[]`}let eN=_`
-- Can't use pg_authid here since some managed Postgres providers don't expose it
-- https://github.com/supabase/postgres-meta/issues/212

select
  r.oid as id,
  rolname as name,
  rolsuper as "isSuperuser",
  rolcreatedb as "canCreateDb",
  rolcreaterole as "canCreateRole",
  rolinherit as "inheritRole",
  rolcanlogin as "canLogin",
  rolreplication as "isReplicationRole",
  rolbypassrls as "canBypassRls",
  (
    select
      count(*)
    from
      pg_stat_activity
    where
      r.rolname = pg_stat_activity.usename
  ) as "activeConnections",
  case when rolconnlimit = -1 then current_setting('max_connections') :: int8
       else rolconnlimit
  end as "connectionLimit",
  rolvaliduntil as "validUntil",
  coalesce(r_config.role_configs, '{}') as config
from
  pg_roles r
  left join (
    select
      oid,
      jsonb_object_agg(param, value) filter (where param is not null) as role_configs
    from
      (
        select
          oid,
          (string_to_array(unnest(rolconfig), '='))[1] as param,
          (string_to_array(unnest(rolconfig), '='))[2] as value
        from
          pg_roles
      ) as _
    group by
      oid
  ) r_config on r_config.oid = r.oid
`,e$=n.z.object({id:n.z.number(),name:n.z.string(),isSuperuser:n.z.boolean(),canCreateDb:n.z.boolean(),canCreateRole:n.z.boolean(),inheritRole:n.z.boolean(),canLogin:n.z.boolean(),isReplicationRole:n.z.boolean(),canBypassRls:n.z.boolean(),activeConnections:n.z.number(),connectionLimit:n.z.number(),validUntil:n.z.union([n.z.string(),n.z.null()]),config:n.z.record(n.z.string(),n.z.string())}),ev=n.z.array(e$),eT=n.z.optional(e$);function eS(e){if("id"in e&&e.id)return _`${o("id")} = ${s(e.id)}`;if("name"in e&&e.name)return _`${o("name")} = ${s(e.name)}`;throw Error("Must provide either id or name")}let eI=_`
-- Adapted from information_schema.schemata

select
  n.oid as id,
  n.nspname as name,
  u.rolname as owner,
   obj_description(n.oid, 'pg_namespace') AS comment
from
  pg_namespace n,
  pg_roles u
where
  n.nspowner = u.oid
  and (
    pg_has_role(n.nspowner, 'USAGE')
    or has_schema_privilege(n.oid, 'CREATE, USAGE')
  )
  and not pg_catalog.starts_with(n.nspname, 'pg_temp_')
  and not pg_catalog.starts_with(n.nspname, 'pg_toast_temp_')
`,eA=n.z.object({id:n.z.number(),name:n.z.string(),owner:n.z.string(),comment:n.z.string().nullable()}),ey=n.z.array(eA),eO=n.z.optional(eA),eR=(e=_``)=>_`
select
  c.oid as relation_id,
  nc.nspname as schema,
  c.relname as name,
  case
    when c.relkind = 'r' then 'table'
    when c.relkind = 'v' then 'view'
    when c.relkind = 'm' then 'materialized_view'
    when c.relkind = 'f' then 'foreign_table'
    when c.relkind = 'p' then 'partitioned_table'
  end as kind,
  coalesce(
    jsonb_agg(
      jsonb_build_object(
        'grantor', grantor.rolname,
        'grantee', grantee.rolname,
        'privilege_type', _priv.privilege_type,
        'is_grantable', _priv.is_grantable
      )
    ) filter (where _priv is not null),
    '[]'
  ) as privileges
from pg_class c
join pg_namespace as nc
  on nc.oid = c.relnamespace
left join lateral (
  select grantor, grantee, privilege_type, is_grantable
  from aclexplode(coalesce(c.relacl, acldefault('r', c.relowner)))
) as _priv on true
left join pg_roles as grantor
  on grantor.oid = _priv.grantor
left join (
  select
    pg_roles.oid,
    pg_roles.rolname
  from pg_roles
  union all
  select
    (0)::oid as oid, 'PUBLIC'
) as grantee (oid, rolname)
  on grantee.oid = _priv.grantee
where c.relkind in ('r', 'v', 'm', 'f', 'p')
  and not pg_is_other_temp_schema(c.relnamespace)
  ${e}
  and (
    pg_has_role(c.relowner, 'USAGE')
    or has_table_privilege(
      c.oid,
      'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
      || case when current_setting('server_version_num')::int4 >= 170000 then ', MAINTAIN' else '' end
    )
    or has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
  )
group by
  c.oid,
  nc.nspname,
  c.relname,
  c.relkind
`,eL=n.z.object({relation_id:n.z.number(),schema:n.z.string(),name:n.z.string(),kind:n.z.union([n.z.literal("table"),n.z.literal("view"),n.z.literal("materialized_view"),n.z.literal("foreign_table"),n.z.literal("partitioned_table")]),privileges:n.z.array(n.z.object({grantor:n.z.string(),grantee:n.z.string(),privilege_type:n.z.union([n.z.literal("SELECT"),n.z.literal("INSERT"),n.z.literal("UPDATE"),n.z.literal("DELETE"),n.z.literal("TRUNCATE"),n.z.literal("REFERENCES"),n.z.literal("TRIGGER"),n.z.literal("MAINTAIN")]),is_grantable:n.z.boolean()}))}),ew=n.z.array(eL),eC=n.z.optional(eL);function eD(e){let t=s(e);return _`(select n.nspname from pg_class c join pg_namespace n on n.oid = c.relnamespace where c.oid = ${t}), (select relname from pg_class where oid = ${t})`}function ez(e){return"public"===e.toLowerCase()?_`public`:o(e)}let ex=e=>{let t=e?_`
  AND c.oid = ${e}`:_``,n=e?_`
      and c.oid = ${e}`:_``,a=e?_`
      and (c.conrelid = ${e} or c.confrelid = ${e})`:_``,r=e?_` order by relationships.constraint_name, relationships.source_column_name, relationships.target_column_name`:_``;return _`
SELECT
  c.oid :: int8 AS id,
  nc.nspname AS schema,
  c.relname AS name,
  c.relrowsecurity AS rls_enabled,
  c.relforcerowsecurity AS rls_forced,
  CASE
    WHEN c.relreplident = 'd' THEN 'DEFAULT'
    WHEN c.relreplident = 'i' THEN 'INDEX'
    WHEN c.relreplident = 'f' THEN 'FULL'
    ELSE 'NOTHING'
  END AS replica_identity,
  pg_total_relation_size(format('%I.%I', nc.nspname, c.relname)) :: int8 AS bytes,
  pg_size_pretty(
    pg_total_relation_size(format('%I.%I', nc.nspname, c.relname))
  ) AS size,
  pg_stat_get_live_tuples(c.oid) AS live_rows_estimate,
  pg_stat_get_dead_tuples(c.oid) AS dead_rows_estimate,
  obj_description(c.oid) AS comment,
  coalesce(pk.primary_keys, '[]') as primary_keys,
  coalesce(
    jsonb_agg(relationships${r}) filter (where relationships is not null),
    '[]'
  ) as relationships
FROM
  pg_namespace nc
  JOIN pg_class c ON nc.oid = c.relnamespace
  left join (
    select
      c.oid::int8 as table_id,
      jsonb_agg(
        jsonb_build_object(
          'table_id', c.oid::int8,
          'schema', n.nspname,
          'table_name', c.relname,
          'name', a.attname
        )
        order by array_position(i.indkey, a.attnum)
      ) as primary_keys
    from
      pg_index i
      join pg_class c on i.indrelid = c.oid
      join pg_namespace n on c.relnamespace = n.oid
      join pg_attribute a on a.attrelid = c.oid and a.attnum = any(i.indkey)
    where
      i.indisprimary${n}
    group by c.oid
  ) as pk
  on pk.table_id = c.oid
  left join (
    select
      c.oid :: int8 as id,
      c.conname as constraint_name,
      nsa.nspname as source_schema,
      csa.relname as source_table_name,
      sa.attname as source_column_name,
      nta.nspname as target_table_schema,
      cta.relname as target_table_name,
      ta.attname as target_column_name
    from
      pg_constraint c
    cross join lateral unnest(c.conkey, c.confkey) with ordinality as cols(source_attnum, target_attnum, ord)
    join (
      pg_attribute sa
      join pg_class csa on sa.attrelid = csa.oid
      join pg_namespace nsa on csa.relnamespace = nsa.oid
    ) on sa.attrelid = c.conrelid and sa.attnum = cols.source_attnum
    join (
      pg_attribute ta
      join pg_class cta on ta.attrelid = cta.oid
      join pg_namespace nta on cta.relnamespace = nta.oid
    ) on ta.attrelid = c.confrelid and ta.attnum = cols.target_attnum
    where
      c.contype = 'f'${a}
  ) as relationships
  on (relationships.source_schema = nc.nspname and relationships.source_table_name = c.relname)
  or (relationships.target_table_schema = nc.nspname and relationships.target_table_name = c.relname)
WHERE
  c.relkind IN ('r', 'p')
  AND NOT pg_is_other_temp_schema(nc.oid)
  AND (
    pg_has_role(c.relowner, 'USAGE')
    OR has_table_privilege(
      c.oid,
      'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
    )
    OR has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
  )${t}
group by
  c.oid,
  c.relname,
  c.relrowsecurity,
  c.relforcerowsecurity,
  c.relreplident,
  nc.nspname,
  pk.primary_keys
`},eF=ex(),eU=n.z.object({table_id:n.z.number(),name:n.z.string(),schema:n.z.string(),table_name:n.z.string()}),eH=n.z.object({id:n.z.number(),constraint_name:n.z.string(),source_schema:n.z.string(),source_table_name:n.z.string(),source_column_name:n.z.string(),target_table_schema:n.z.string(),target_table_name:n.z.string(),target_column_name:n.z.string()}),ek=n.z.object({id:n.z.number(),schema:n.z.string(),name:n.z.string(),rls_enabled:n.z.boolean(),rls_forced:n.z.boolean(),replica_identity:n.z.enum(["DEFAULT","INDEX","FULL","NOTHING"]),bytes:n.z.number(),size:n.z.string(),live_rows_estimate:n.z.number(),dead_rows_estimate:n.z.number(),comment:n.z.string().nullable(),primary_keys:n.z.array(eU),relationships:n.z.array(eH),columns:y.optional()}),eq=n.z.array(ek);e.s(["create",0,function({name:e,schema:t="public",comment:n,no_transaction:a=!1}){let r=_`CREATE TABLE ${o(t)}.${o(e)} ();`,i=void 0!=n?_`COMMENT ON TABLE ${o(t)}.${o(e)} IS ${s(n)};`:_``;return a?{sql:_`${r} ${i}`}:{sql:_`BEGIN; ${r} ${i} COMMIT;`}},"list",0,function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:n,limit:a,offset:r,includeColumns:i=!0}={}){let o=(({includeColumns:e})=>_`
  with tables as (${eF})
  ${e?_`, columns as (${I})`:_``}
  select
    *
    ${e?_`, ${E("columns",_`columns.table_id = tables.id`)}`:_``}
  from tables`)({includeColumns:i}),l=g(t,n,e?void 0:u.DEFAULT_SYSTEM_SCHEMAS);return l&&(o=_`${o} where schema ${l}`),a&&(o=_`${o} limit ${s(a)}`),r&&(o=_`${o} offset ${s(r)}`),{sql:o,zod:eq}},"remove",0,function(e,{cascade:t=!1}={}){return{sql:_`DROP TABLE ${o(e.schema)}.${o(e.name)} ${t?_`CASCADE`:_`RESTRICT`};`}},"retrieve",0,function(e){let t,n=function(e){if("id"in e&&e.id)return _`${o("id")} = ${s(e.id)}`;if("name"in e&&e.name&&e.schema)return _`${o("name")} = ${s(e.name)} and ${o("schema")} = ${s(e.schema)}`;throw Error("Must provide either id or name and schema")}(e);if("id"in e&&e.id)t=_`${s(e.id)}`;else if("name"in e&&e.name&&e.schema)t=_`(select tc.oid from pg_class tc join pg_namespace tn on tn.oid = tc.relnamespace where tc.relname = ${s(e.name)} and tn.nspname = ${s(e.schema)})`;else throw Error("Must provide either id or name and schema");let a=ex(t),r=S({filter:{column:"oid",predicate:_`= ${t}`}});return{sql:_`
  with tables as (${a})
  , columns as (${r})
  select
    *
    , ${E("columns",_`columns.table_id = tables.id`,_`columns.ordinal_position`)}
  from tables where ${n};`,zod:ek}},"update",0,function(e,{name:t,schema:n,rls_enabled:a,rls_forced:r,replica_identity:i,replica_identity_index:l,primary_keys:d,comment:m}){let u=_`ALTER TABLE ${o(e.schema)}.${o(e.name)}`,E=void 0===n?_``:_`${u} SET SCHEMA ${o(n)};`,g=_``;if(void 0!==t&&t!==e.name){let a=void 0===n?e.schema:n;g=_`ALTER TABLE ${o(a)}.${o(e.name)} RENAME TO ${o(t)};`}let f=_``;if(void 0!==a){let e=_`${u} ENABLE ROW LEVEL SECURITY;`,t=_`${u} DISABLE ROW LEVEL SECURITY;`;f=a?e:t}let h=_``;if(void 0!==r){let e=_`${u} FORCE ROW LEVEL SECURITY;`,t=_`${u} NO FORCE ROW LEVEL SECURITY;`;h=r?e:t}let b=_``;if(void 0===i);else if("INDEX"===i){if(!l)throw Error("replica_identity_index is required when replica_identity is INDEX");b=_`${u} REPLICA IDENTITY USING INDEX ${o(l)};`}else b=_`${u} REPLICA IDENTITY ${c(i)};`;let N=_``;void 0===d||(N=_`${N}
DO $$
DECLARE
  r record;
BEGIN
  SELECT conname
    INTO r
    FROM pg_constraint
    WHERE contype = 'p' AND conrelid = ${s(e.id)};
  IF r IS NOT NULL THEN
    EXECUTE ${s(`${u} DROP CONSTRAINT `)} || quote_ident(r.conname);
  END IF;
END
$$;
`,0===d.length||(N=_`${N} ${u} ADD PRIMARY KEY (${p(d.map(e=>o(e.name)),",")});`));let $=void 0==m?_``:_`COMMENT ON TABLE ${o(e.schema)}.${o(e.name)} IS ${s(m)};`;return{sql:_`
BEGIN;
  ${f}
  ${h}
  ${b}
  ${N}
  ${$}
  ${E}
  ${g}
COMMIT;`}}],330006);var eM=e.i(330006);let ej=_`
SELECT
  pg_t.oid AS id,
  pg_t.tgrelid AS table_id,
  CASE
    WHEN pg_t.tgenabled = 'D' THEN 'DISABLED'
    WHEN pg_t.tgenabled = 'O' THEN 'ORIGIN'
    WHEN pg_t.tgenabled = 'R' THEN 'REPLICA'
    WHEN pg_t.tgenabled = 'A' THEN 'ALWAYS'
  END AS enabled_mode,
  (
    STRING_TO_ARRAY(
      ENCODE(pg_t.tgargs, 'escape'), '\\000'
    )
  )[:pg_t.tgnargs] AS function_args,
  is_t.trigger_name AS name,
  is_t.event_object_table AS table,
  is_t.event_object_schema AS schema,
  is_t.action_condition AS condition,
  is_t.action_orientation AS orientation,
  is_t.action_timing AS activation,
  ARRAY_AGG(is_t.event_manipulation)::text[] AS events,
  pg_p.proname AS function_name,
  pg_n.nspname AS function_schema
FROM
  pg_trigger AS pg_t
JOIN
  pg_class AS pg_c
ON pg_t.tgrelid = pg_c.oid
JOIN information_schema.triggers AS is_t
ON is_t.trigger_name = pg_t.tgname
AND pg_c.relname = is_t.event_object_table
AND pg_c.relnamespace = (quote_ident(is_t.event_object_schema))::regnamespace
JOIN pg_proc AS pg_p
ON pg_t.tgfoid = pg_p.oid
JOIN pg_namespace AS pg_n
ON pg_p.pronamespace = pg_n.oid
GROUP BY
  pg_t.oid,
  pg_t.tgrelid,
  pg_t.tgenabled,
  pg_t.tgargs,
  pg_t.tgnargs,
  is_t.trigger_name,
  is_t.event_object_table,
  is_t.event_object_schema,
  is_t.action_condition,
  is_t.action_orientation,
  is_t.action_timing,
  pg_p.proname,
  pg_n.nspname
`,eP=n.z.object({id:n.z.number(),table_id:n.z.number(),enabled_mode:n.z.enum(["DISABLED","ORIGIN","REPLICA","ALWAYS"]),function_args:n.z.array(n.z.string()),name:n.z.string(),table:n.z.string(),schema:n.z.string(),condition:n.z.string().nullable(),orientation:n.z.enum(["ROW","STATEMENT"]),activation:n.z.enum(["BEFORE","AFTER","INSTEAD OF"]),events:n.z.array(n.z.string()),function_name:n.z.string(),function_schema:n.z.string()}),eW=n.z.array(eP),eY=n.z.optional(eP);n.z.object({name:n.z.string(),schema:n.z.string().optional().default("public"),table:n.z.string(),function_schema:n.z.string().optional().default("public"),function_name:n.z.string(),function_args:n.z.array(n.z.string()).optional(),activation:n.z.enum(["BEFORE","AFTER","INSTEAD OF"]),events:n.z.array(n.z.string()),orientation:n.z.enum(["ROW","STATEMENT"]).optional(),condition:n.z.string().optional()}),n.z.object({name:n.z.string().optional(),enabled_mode:n.z.enum(["ORIGIN","REPLICA","ALWAYS","DISABLED"]).optional()});let eB=_`
select
  t.oid::int8 as id,
  t.typname as name,
  n.nspname as schema,
  format_type (t.oid, null) as format,
  coalesce(
    (
      select
        jsonb_agg(e.enumlabel order by e.enumsortorder)
      from
        pg_enum e
      where
        e.enumtypid = t.oid
    ),
    '[]'
  ) as enums,
  coalesce(
    (
      select
        jsonb_agg(
          jsonb_build_object('name', a.attname, 'type_id', a.atttypid::int8)
          order by a.attnum asc
        )
      from
        pg_attribute a
      where
        a.attrelid = t.typrelid and not a.attisdropped
    ),
    '[]'
  ) as attributes,
  obj_description (t.oid, 'pg_type') as comment
from
  pg_type t
  left join pg_namespace n on n.oid = t.typnamespace
where
  (
    t.typrelid = 0
    or (
      select
        c.relkind = 'c'
      from
        pg_class c
      where
        c.oid = t.typrelid
    )
  )
`,eG=n.z.object({id:n.z.number(),name:n.z.string(),schema:n.z.string(),format:n.z.string(),enums:n.z.array(n.z.string()),attributes:n.z.array(n.z.object({name:n.z.string(),type_id:n.z.number()})),comment:n.z.string().nullable()}),eJ=n.z.array(eG);e.s(["list",0,function({includeArrayTypes:e=!1,includeSystemSchemas:t=!1,includedSchemas:n,excludedSchemas:a,limit:r,offset:i}={}){let o=eB;e||(o=_`${o} and not exists (
      select from pg_type el
      where el.oid = t.typelem
        and el.typarray = t.oid
    )`);let l=g(n,a,t?void 0:u.DEFAULT_SYSTEM_SCHEMAS);return l&&(o=_`${o} and n.nspname ${l}`),o=_`${o} order by t.oid`,r&&(o=_`${o} limit ${s(r)}`),i&&(o=_`${o} offset ${s(i)}`),{sql:o,zod:eJ}}],211309);var eX=e.i(211309);let eV=_`
select
  version(),
  current_setting('server_version_num')::int8 as version_number,
  (
    select
      count(*) as active_connections
    from
      pg_stat_activity
  ) as active_connections,
  current_setting('max_connections')::int8 as max_connections
`,eQ=n.z.object({version:n.z.string(),version_number:n.z.number(),active_connections:n.z.number(),max_connections:n.z.number()}),eK=_`
SELECT
  c.oid :: int8 AS id,
  n.nspname AS schema,
  c.relname AS name,
  (pg_relation_is_updatable(c.oid, false) & 20) = 20 AS is_updatable,
  obj_description(c.oid) AS comment
FROM
  pg_class c
  JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE
  c.relkind = 'v'
`,eZ=n.z.object({id:n.z.number(),schema:n.z.string(),name:n.z.string(),is_updatable:n.z.boolean(),comment:n.z.string().nullable(),columns:y.optional()}),e0=n.z.array(eZ),e1=n.z.optional(eZ),e2=({includeColumns:e})=>_`
with views as (${eK})
  ${e?_`, columns as (${I})`:_``}
select
  *
  ${e?_`, ${E("columns",_`columns.table_id = views.id`)}`:_``}
from views`;function e3(e,t){let n=_`select count(*) from ${tt(e)}`,{filters:a}=t??{};return a&&(n=e9(n,a)),_`${n};`}function e8(e,t){let n=_`truncate ${tt(e)}`,{cascade:a}=t??{};return a&&(n=_`${n} cascade`),_`${n};`}function e4(e,t,n){if(!t||0===t.length)throw Error("no filters for this delete query");let a=_`delete from ${tt(e)}`,{returning:r,enumArrayColumns:i}=n??{};if(t&&(a=e9(a,t)),r){let e=void 0===i||0===i.length?_` returning *`:_` returning *, ${p(i.map(e=>_`${o(e)}::text[]`),",")}`;a=_`${a}${e}`}return _`${a};`}function e6(e,t,n){if(!t||0===t.length)throw Error("no value to insert");let{returning:a,enumArrayColumns:r}=n??{},i=p(Object.keys(t[0]).map(e=>o(e)),","),l=_``;if(l=0==i.length?d(_`insert into %1$s select from jsonb_populate_recordset(null::%1$s, %2$s)`,tt(e),s(JSON.stringify(t))):d(_`insert into %1$s (%2$s) select %2$s from jsonb_populate_recordset(null::%1$s, %3$s)`,tt(e),i,s(JSON.stringify(t))),a){let e=void 0===r||0===r.length?_` returning *`:_` returning *, ${p(r.map(e=>_`${o(e)}::text[]`),",")}`;l=_`${l}${e}`}return _`${l};`}function e7(e,t,n,a=!0,r=!1){var i,l;let c,d=_``,m=t??_`*`;d=_`select ${m} from ${r?(i=e,_`${o(i.name)}`):tt(e)}`;let{filters:u,pagination:E,sorts:g}=n??{};if(u&&(d=e9(d,u)),g&&(l=d,d=0===(c=g.filter(e=>e.column)).length?l:l=_`${l} order by ${p(c.map(e=>{let t=e.ascending?_`asc`:_`desc`,n=e.nullsFirst?_`nulls first`:_`nulls last`;return _`${o(e.table)}.${o(e.column)} ${t} ${n}`}),", ")}`),E){let{limit:e,offset:t}=E??{};d=_`${d} limit ${s(e)} offset ${s(t)}`}return _`${d}${a?_`;`:_``}`}function e5(e,t,n){let{filters:a,returning:r,enumArrayColumns:i}=n??{};if(!a||0===a.length)throw Error("no filters for this update query");let l=p(Object.keys(t).map(e=>o(e)),","),c=d(_`update %1$s set (%2$s) = (select %2$s from json_populate_record(null::%1$s, %3$s))`,tt(e),l,s(JSON.stringify(t)));if(a&&(c=e9(c,a)),r){let e=void 0===i||0===i.length?_` returning *`:_` returning *, ${p(i.map(e=>_`${o(e)}::text[]`),",")}`;c=_`${c}${e}`}return _`${c};`}function e9(e,t){return 0===t.length?e:e=_`${e} where ${p(t.map(e=>{if(Array.isArray(e.column))switch(e.operator){case"in":var t,n,a=e;if(!Array.isArray(a.column))throw Error("Use inFilterSql for single columns");if(!Array.isArray(a.value))throw Error("Values for a tuple 'in' filter must be an array");let r=_`(${p(a.column.map(e=>o(e)),", ")})`,i=a.value.map(e=>{if(Array.isArray(e)){if(e.length!==a.column.length)throw Error("Tuple value length must match column length");return _`(${p(e.map(e=>te(e)),", ")})`}{let t=String(e).split(",");if(t.length!==a.column.length)throw Error("Tuple value length must match column length");return _`(${p(t.map(e=>te(e)),", ")})`}});return _`${r} ${a.operator} (${p(i,", ")})`;case"=":case"<>":case">":case"<":case">=":case"<=":var s=e;if(!Array.isArray(s.column))throw Error("Use standard applyFilters for single column");if(!Array.isArray(s.value))throw Error("Tuple filter value must be an array");if(s.value.length!==s.column.length)throw Error("Tuple filter value must have the same length as the column array");let l=_`(${p(s.column.map(e=>o(e)),", ")})`,c=_`(${p(s.value.map(e=>te(e)),", ")})`;return _`${l} ${s.operator} ${c}`;default:throw Error(`Cannot use ${e.operator} operator in a tuple filter`)}switch(e.operator){case"in":let d;return d=Array.isArray((t=e).value)?t.value.map(e=>te(e)):String(t.value).split(",").map(e=>te(e)),_`${o(t.column)} ${t.operator} (${p(d,",")})`;case"is":var m=e;let u=String(m.value);switch(u){case"null":case"false":case"true":case"not null":return _`${o(m.column)} ${m.operator} ${u}`;default:return _`${o(m.column)} ${m.operator} ${te(m.value)}`}case"~~":case"~~*":case"!~~":case"!~~*":return n=e,_`${o(n.column)}::text ${n.operator} ${te(n.value)}`;default:return _`${o(e.column)} ${e.operator} ${te(e.value)}`}})," and ")}`}function te(e){if("boolean"==typeof e)return e?"true":"false";if("string"==typeof e&&e.startsWith("ARRAY[")){let t=function(e){if(!e.startsWith("ARRAY["))return null;let t=e.slice(6),n=!1,a=-1;for(let e=0;e<t.length;e++){let r=t[e];if(n)"'"===r&&"'"===t[e+1]?e++:"'"===r&&(n=!1);else if("]"===r){a=e;break}else"'"===r&&(n=!0)}if(-1===a)return null;let r=t.slice(0,a),i=t.slice(a+1),o=_``;if(""!==i){let e=i.match(/^::([A-Za-z_][A-Za-z0-9_]*)(\[\])?$/);if(!e)return null;o=_`::${e[1]}${e[2]?_`[]`:_``}`}let l=[],c="",d=!1;for(let e=0;e<r.length;e++){let t=r[e];d?"'"===t&&"'"===r[e+1]?(c+="''",e++):"'"===t?(c+=t,d=!1):c+=t:"'"===t?(d=!0,c+=t):","===t?(l.push(c.trim()),c=""):c+=t}c.trim()&&l.push(c.trim());let m=p(l.map(e=>e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1).replace(/''/g,"'"):e).map(e=>s(e)),",");return _`ARRAY[${m}]${o}`}(e);if(null!==t)return t}return s(e)}function tt(e){return _`${o(e.schema)}.${o(e.name)}`}function tn(e){return _`
    begin;

    ${e}

    commit;
  `}function ta(e){return _`
    begin;

    ${e}

    rollback;
  `}e.s([],967533),e.i(967533),e.s(["countQuery",0,e3,"deleteQuery",0,e4,"insertQuery",0,e6,"selectQuery",0,e7,"truncateQuery",0,e8,"updateQuery",0,e5,"wrapWithRollback",0,ta,"wrapWithTransaction",0,tn],332357);class tr{table;actionConfig;options;pagination;constructor(e,t,n){this.table=e,this.actionConfig=t,this.options=n}range(e,t){return this.pagination={offset:e,limit:t-e+1},this}toSql(e={isCTE:!1,isFinal:!0}){try{let{actionOptions:t,filters:n,sorts:a}=this.options??{};switch(this.actionConfig.action){case"count":return e3(this.table,{filters:n});case"delete":return e4(this.table,n,{returning:t?.returning,enumArrayColumns:t?.enumArrayColumns});case"insert":return e6(this.table,this.actionConfig.actionValue,{returning:t?.returning,enumArrayColumns:t?.enumArrayColumns});case"select":return e7(this.table,this.actionConfig.actionValue,{filters:n,pagination:this.pagination,sorts:a},e.isFinal,e.isCTE);case"update":return e5(this.table,this.actionConfig.actionValue,{filters:n,returning:t?.returning,enumArrayColumns:t?.enumArrayColumns});case"truncate":return e8(this.table,{cascade:t?.cascade});default:return _``}}catch(e){throw e}}}e.s(["QueryModifier",0,tr],29659);class ti{table;actionConfig;actionOptions;filters;sorts;constructor(e,t,n){this.table=e,this.actionConfig=t,this.actionOptions=n,this.filters=[],this.sorts=[]}filter(e,t,n){return this.filters.push({column:e,operator:t,value:n}),this}match(e){return Object.entries(e).map(([e,t])=>{this.filters.push({column:e,operator:"=",value:t})}),this}order(e,t,n=!0,a=!1){return this.sorts.push({table:e,column:t,ascending:n,nullsFirst:a}),this}range(e,t){return this._getQueryModifier().range(e,t)}clone(){let e=structuredClone({table:this.table,actionConfig:this.actionConfig,actionOptions:this.actionOptions,filters:this.filters,sorts:this.sorts}),t=new ti(e.table,e.actionConfig,e.actionOptions);return t.filters=e.filters,t.sorts=e.sorts,t}toSql(e){return this._getQueryModifier().toSql(e)}_getQueryModifier(){return new tr(this.table,this.actionConfig,{actionOptions:this.actionOptions,filters:this.filters,sorts:this.sorts})}}e.s(["QueryFilter",0,ti],193767);class to{table;constructor(e){this.table=e}count(){return new ti(this.table,{action:"count"})}delete(e){return new ti(this.table,{action:"delete"},e)}insert(e,t){return new ti(this.table,{action:"insert",actionValue:e},t)}select(e){return new ti(this.table,{action:"select",actionValue:e})}update(e,t){return new ti(this.table,{action:"update",actionValue:e},t)}truncate(e){return new ti(this.table,{action:"truncate"},e)}}e.s(["QueryAction",0,to],212695);class ts{from(e,t){return new to({name:e,schema:t??"public"})}}e.s(["Query",0,ts],721490),e.i(721490),e.i(332357),e.i(193767),e.i(212695),e.i(29659),e.s(["Query",0,ts,"QueryAction",0,to,"QueryFilter",0,ti,"QueryModifier",0,tr,"countQuery",0,e3,"deleteQuery",0,e4,"insertQuery",0,e6,"selectQuery",0,e7,"truncateQuery",0,e8,"updateQuery",0,e5,"wrapWithRollback",0,ta,"wrapWithTransaction",0,tn],377171);var tl=e.i(377171);let tc=_`
CREATE OR REPLACE FUNCTION pg_temp.count_estimate(
    query text
) RETURNS integer LANGUAGE plpgsql AS $$
DECLARE
    plan jsonb;
BEGIN
    EXECUTE 'EXPLAIN (FORMAT JSON)' || query INTO plan;
    RETURN plan->0->'Plan'->'Plan Rows';
END;
$$;
`;function td(e,t){let n="00000000-0000-0000-0000-000000000000".split("").map((t,n)=>"-"===t?t:e[n]??t);if(e.length>=n.length)return n.join("");if(e.length&&e.length<15&&(n[14]="4"),e.length&&e.length<20&&(n[19]=t?"b":"8"),t)for(let t=e.length;t<n.length;t+=1)"0"===n[t]&&(n[t]="f");return n.join("")}function t_(e){if(!e)return[e,void 0];let t=e.charCodeAt(e.length-1);if(122===t)return[e,e+"~"];if(t>=126)return[e,e+" "];let n=e.substring(0,e.length-1)+String.fromCharCode(t+1);return[e,n]}e.s(["COUNT_ESTIMATE_SQL",0,tc,"THRESHOLD_COUNT",0,5e4,"THRESHOLD_ESTIMATE_BYTES",0,1e7],247309),e.s(["prefixToUUID",0,td,"stringRange",0,t_],387578);let tm=_`select reltuples as estimate from pg_class where oid = 'auth.users'::regclass`;e.s(["getUsersCountSQL",0,({filter:e,keywords:t,providers:n,forceExactCount:a=!1,column:r})=>{let i=t&&""!==t,o=[],l=_`select count(*) from auth.users`,c=_`select * from auth.users`;if(r&&i){if("email"===r){let e=t_(t),n=s(e[0]),a=e[1]?s(e[1]):null;o.push(_`lower(email) >= ${n}${a?_` and lower(email) < ${a}`:_``} and instance_id = '00000000-0000-0000-0000-000000000000'::uuid`)}else if("phone"===r){let e=t_(t),n=s(e[0]),a=e[1]?s(e[1]):null;o.push(_`phone >= ${n}${a?_` and phone < ${a}`:_``}`)}else if("id"===r){let e=td(t,!1);if(e===t)o.push(_`id = ${s(t)}`);else{let n=td(t,!0);o.push(_`id >= ${s(e)} and id < ${s(n)}`)}}}else{if(i){let e=s(`%${t}%`);o.push(_`id::text ilike ${e} or email ilike ${e} or phone ilike ${e}`)}if("verified"===e?o.push(_`email_confirmed_at IS NOT NULL or phone_confirmed_at IS NOT NULL`):"anonymous"===e?o.push(_`is_anonymous is true`):"unverified"===e&&o.push(_`email_confirmed_at IS NULL AND phone_confirmed_at IS NULL`),n&&n.length>0)if(n.includes("saml 2.0")){let e=n.map(e=>"saml 2.0"===e?"sso":e);o.push(_`(select jsonb_agg(case when value ~ '^sso' then 'sso' else value end) from jsonb_array_elements_text((raw_app_meta_data ->> 'providers')::jsonb)) ?| array[${s(e)}]`)}else o.push(_`(raw_app_meta_data->>'providers')::jsonb ?| array[${s(n)}]`)}let d=p(o.map(e=>_`(${e})`)," and "),m=o.length>0?_` where ${d}`:_``;if(a)return _`select (${l}${m}), false as is_estimate;`;{let e=_`${c}${m}`,t=_`${l}${m}`,n=s(e);return _`${tc}

with approximation as (${tm})
select 
  case 
    when estimate = -1 then (select pg_temp.count_estimate(${n}))::int
    when estimate > ${s(5e4)} then ${o.length>0?_`(select pg_temp.count_estimate(${n}))::int`:_`estimate::int`}
    else (${t})
  end as count,
  estimate = -1 or estimate > ${s(5e4)} as is_estimate
from approximation`}}],640696);let tp=_`
SELECT id, name, file_size_limit
FROM storage.buckets
WHERE file_size_limit IS NOT NULL
ORDER BY file_size_limit DESC
LIMIT ${s(51)};
`;e.s(["LARGEST_SIZE_LIMIT_BUCKETS_COUNT",0,50,"getLargestSizeLimitBucketsSqlUnoptimized",0,tp],517638),e.s(["getDatabaseExtensionsSQL",0,()=>_`
SELECT
  e.name,
  n.nspname AS schema,
  e.default_version,
  x.extversion AS installed_version,
  e.comment,
  ev.schema AS default_version_schema
FROM
  pg_available_extensions e
  LEFT JOIN pg_extension x ON e.name = x.extname
  LEFT JOIN pg_namespace n ON x.extnamespace = n.oid
  LEFT JOIN pg_available_extension_versions ev
    ON ev.name = e.name AND ev.version = e.default_version;
`,"getEnableDatabaseExtensionSQL",0,({schema:e,name:t,version:n,cascade:a,createSchema:r=!1})=>{let{sql:i}=U.create({schema:e,name:t,version:n,cascade:a});return r?_`CREATE SCHEMA IF NOT EXISTS ${o(e)};
${i}`:i}],53336);let tu=new Set(["table_name","schema_name","schema","id","columns","index","is_new_schema"]),tE=_`
  (select extversion from pg_extension where extname = 'wrappers') in (${p(["0.1.0","0.1.1","0.1.4","0.1.5","0.1.6","0.1.7","0.1.8","0.1.9","0.1.10","0.1.11","0.1.12","0.1.14","0.1.15","0.1.16","0.1.17","0.1.18","0.1.19","0.2.0","0.3.0","0.3.1","0.4.0","0.4.1","0.4.2","0.4.3","0.4.4","0.4.5"].map(e=>s(e)),",")})
`;function tg(e){return Object.fromEntries((e??[]).map(e=>{let t=e.indexOf("=");return -1===t?[e,""]:[e.slice(0,t),e.slice(t+1)]}))}function tf(e){return Object.fromEntries(Object.entries(e).filter(([e,t])=>!tu.has(e)&&!!t))}function th(e,t="\n"){return p(e.filter(e=>e.trim().length>0),t)}function tb(e,t){let n=tf(e);return _`
    create foreign table ${o(e.schema_name)}.${o(e.table_name)} (
      ${p(e.columns.map(e=>_`${o(e.name)} ${c(e.type)}`),",")}
    )
    server ${o(t)}
    options (
      ${p(Object.entries(n).map(([e,t])=>_`${o(e)} ${s(t)}`),",")}
    );
  `}function tN({schema:e,table:t}){return _`
drop foreign table if exists ${o(e)}.${o(t)};
`}e.s(["getCreateFDWSql",0,function({wrapperMeta:e,formState:t,mode:n,tables:a,sourceSchema:r,targetSchema:i,schemaOptions:l=[]}){let c=p(a.filter(e=>e.is_new_schema).map(e=>_`create schema if not exists ${o(e.schema_name)};`),"\n"),d=e.server.options.filter(e=>e.encrypted),m=e.server.options.filter(e=>!e.encrypted),u=p(d.map(e=>{let n=`${t.server_name}_${e.name}`,a=s(t[e.name]||"");return _`
      do $$
      begin
        if ${tE} then
          create extension if not exists pgsodium;

          perform pgsodium.create_key(
            name := ${s(n)}
          );

          perform vault.create_secret(
            new_secret := ${a},
            new_name   := ${s(n)},
            new_key_id := (select id from pgsodium.valid_key where name = ${s(n)})
          );
        else
          perform vault.create_secret(
            new_secret := ${a},
            new_name := ${s(n)}
          );
        end if;
      end $$;
    `}),"\n"),E=d.filter(e=>t[e.name]).map(e=>_`${o(e.name)} ''%s''`),g=m.filter(e=>t[e.name]),f=p([...E,...g.map(e=>_`${o(e.name)} %L`)],","),h=_`
    do $$
    declare
      -- Old wrappers has an implicit dependency on pgsodium. For new wrappers
      -- we use Vault directly.
      is_using_old_wrappers bool;
      ${p(d.map(e=>_`${o(`v_${e.name}`)} text;`),"\n")}
    begin
      is_using_old_wrappers := ${tE};
      ${p(d.map(e=>_`
              if is_using_old_wrappers then
                select id into ${o(`v_${e.name}`)} from pgsodium.valid_key where name = ${s(`${t.server_name}_${e.name}`)} limit 1;
              else
                select id into ${o(`v_${e.name}`)} from vault.secrets where name = ${s(`${t.server_name}_${e.name}`)} limit 1;
              end if;
            `),"\n")}
    
      execute format(
        E'create server ${o(t.server_name)} foreign data wrapper ${o(e.name)} options (${f});',
        ${p([...d.filter(e=>t[e.name]).map(e=>o(`v_${e.name}`)),...g.map(e=>s(t[e.name]))],",")}
      );
    end $$;
  `,b=p(a.map(e=>tb(e,t.server_name)),"\n\n"),N=p([...l,_`strict 'true'`],", ");return th([c,u,h,"tables"===n?b:_``,"schema"===n?_`
  import foreign schema ${o(r)} from server ${o(t.server_name)} into ${o(i)} options (${N});
`:_``],"\n\n")},"getCreateForeignDataWrapperSql",0,function(e){return _`
    do $$
    begin
      if not exists (
        select 1 from pg_catalog.pg_foreign_data_wrapper where fdwname = ${s(e.name)}
      ) then
        execute format(
          'create foreign data wrapper %I handler %I validator %I',
          ${s(e.name)},
          ${s(e.handlerName)},
          ${s(e.validatorName)}
        );
      end if;
    end $$;
  `},"getDeleteFDWSql",0,({wrapper:e,wrapperMeta:t})=>{let n=t.server.options.filter(e=>e.encrypted),a=tg(e.server_options),r=p(n.filter(e=>void 0!==a[e.name]).map(e=>{let t=a[e.name];return _`
        do $$
        begin
          if ${tE} then
            delete from vault.secrets where key_id = ${s(t)};
            delete from pgsodium.key where id = ${s(t)};
          else
            delete from vault.secrets where id = ${s(t)}::uuid;
          end if;
        end $$;
      `}),"\n"),i=_`
    begin
      if not exists (
        select 1
        from pg_catalog.pg_foreign_server s
        join pg_catalog.pg_foreign_data_wrapper w on w.oid = s.srvfdw
        where s.oid = ${s(e.id)}
          and s.srvname = ${s(e.server_name)}
          and w.fdwname = ${s(e.name)}
      ) then
        raise exception 'The selected foreign server no longer belongs to this wrapper.';
      end if;
    end
  `;return _`
    do ${s(i)};

    drop server if exists ${o(e.server_name)} cascade;

    do $$
    begin
      if not exists (
        select 1
        from pg_catalog.pg_foreign_server s
        join pg_catalog.pg_foreign_data_wrapper w on w.oid = s.srvfdw
        where w.fdwname = ${s(e.name)}
      ) then
        execute format('drop foreign data wrapper if exists %I cascade', ${s(e.name)});
      end if;
    end $$;

    ${r}
  `},"getDropForeignTableSql",0,tN,"getFDWsSql",0,()=>_`
    select
      s.oid as "id",
      w.fdwname as "name",
      s.srvname as "server_name",
      s.srvoptions as "server_options",
      c.proname as "handler",
      (
        select jsonb_agg(
          jsonb_build_object(
            'id', c.oid::bigint,
            'schema', relnamespace::regnamespace::text,
            'name', c.relname,
            'columns', (
              select jsonb_agg(
                jsonb_build_object(
                  'name', a.attname,
                  'type', pg_catalog.format_type(a.atttypid, a.atttypmod)
                )
              )
              from pg_catalog.pg_attribute a
              where a.attrelid = c.oid and a.attnum > 0 and not a.attisdropped
            ),
            'options', t.ftoptions
          )
        )
        from pg_catalog.pg_class c
        join pg_catalog.pg_foreign_table t on c.oid = t.ftrelid
        where c.oid = any (select t.ftrelid from pg_catalog.pg_foreign_table t where t.ftserver = s.oid)
      ) as "tables"
    from pg_catalog.pg_foreign_server s
    join pg_catalog.pg_foreign_data_wrapper w on s.srvfdw = w.oid
    join pg_catalog.pg_proc c on w.fdwhandler = c.oid;
  `,"getImportForeignSchemaSql",0,function({serverName:e,sourceSchema:t,targetSchema:n,schemaOptions:a=[]}){let r=p([...a,_`strict 'true'`],", ");return _`
  import foreign schema ${o(t)} from server ${o(e)} into ${o(n)} options (${r});
`},"getUpdateFDWSql",0,({wrapper:e,wrapperMeta:t,formState:n,tables:a})=>{let r=n.server_name||e.server_name,i=r!==e.server_name?_`alter server ${o(e.server_name)} rename to ${o(r)};`:_``,l=t.server.options.filter(e=>e.encrypted),d=t.server.options.filter(e=>!e.encrypted),m=tg(e.server_options),u=[],E=[];for(let e of d){let t=m[e.name],a=n[e.name];a?void 0===t?u.push(_`add ${o(e.name)} ${s(a)}`):t!==a&&u.push(_`set ${o(e.name)} ${s(a)}`):void 0!==t&&u.push(_`drop ${o(e.name)}`)}for(let e of l){let t=m[e.name],a=n[e.name],i=`${r}_${e.name}`;a&&void 0!==t?E.push(_`
        do $$
        declare
          v_secret_id uuid;
        begin
          if ${tE} then
            select id into v_secret_id from vault.secrets where key_id = ${s(t)} limit 1;
          else
            v_secret_id := ${s(t)}::uuid;
          end if;

          perform vault.update_secret(
            secret_id := v_secret_id,
            new_secret := ${s(a)},
            new_name := ${s(i)}
          );
        end $$;
      `):a&&void 0===t?E.push(_`
        do $$
        begin
          if ${tE} then
            create extension if not exists pgsodium;

            perform pgsodium.create_key(name := ${s(i)});

            perform vault.create_secret(
              new_secret := ${s(a)},
              new_name := ${s(i)},
              new_key_id := (select id from pgsodium.valid_key where name = ${s(i)})
            );
          else
            perform vault.create_secret(
              new_secret := ${s(a)},
              new_name := ${s(i)}
            );
          end if;
        end $$;

        do $$
        declare
          v_secret_ref text;
        begin
          if ${tE} then
            select id::text into v_secret_ref from pgsodium.valid_key where name = ${s(i)} limit 1;
          else
            select id::text into v_secret_ref from vault.secrets where name = ${s(i)} limit 1;
          end if;

          execute format('alter server ${o(r)} options (add ${o(e.name)} %L)', v_secret_ref);
        end $$;
      `):a||void 0===t||(u.push(_`drop ${o(e.name)}`),E.push(_`
        do $$
        begin
          if ${tE} then
            delete from vault.secrets where key_id = ${s(t)};
            delete from pgsodium.key where id = ${s(t)};
          else
            delete from vault.secrets where id = ${s(t)}::uuid;
          end if;
        end $$;
      `))}let g=u.length>0?_`
          alter server ${o(r)}
          options (${p(u,", ")});
        `:_``,f=p(E,"\n"),h=e.tables??[],b=new Map(h.map(e=>[e.id,e])),N=new Set(a.map(e=>e.id).filter(e=>void 0!==e)),$=a.filter(e=>void 0===e.id||!b.has(e.id)),v=h.filter(e=>!N.has(e.id)),T=a.map(e=>{if(void 0===e.id)return null;let t=b.get(e.id);return t?{current:t,desired:e}:null}).filter(e=>null!==e),S=p($.filter(e=>e.is_new_schema).map(e=>_`create schema if not exists ${o(e.schema_name)};`),"\n"),I=p($.map(e=>tb(e,r)),"\n"),A=p(v.map(e=>tN({schema:e.schema,table:e.name})),"\n"),y=p(T.map(({current:e,desired:t})=>{let n,a,r,i;return n=t.schema_name!==e.schema,a=t.table_name!==e.name,r=n?_`alter foreign table ${o(e.schema)}.${o(e.name)} set schema ${o(t.schema_name)};`:_``,i=n?t.schema_name:e.schema,th([r,a?_`alter foreign table ${o(i)}.${o(e.name)} rename to ${o(t.table_name)};`:_``])}),"\n"),O=p(T.map(({current:e,desired:t})=>(function(e,t,n,a){var r,i;let l,d,{columnsToAdd:m,columnsToDrop:u}=(r=n.columns,i=a.columns,l=new Map(r.map(e=>[e.name,e.type])),d=new Map(i.map(e=>[e.name,e.type])),{columnsToAdd:i.filter(e=>l.get(e.name)!==e.type),columnsToDrop:r.filter(e=>d.get(e.name)!==e.type)}),E=u.length>0?_`
          alter foreign table ${o(e)}.${o(t)}
          ${p(u.map(e=>_`drop column ${o(e.name)}`),", ")};
        `:_``,g=m.length>0?_`
          alter foreign table ${o(e)}.${o(t)}
          ${p(m.map(e=>_`add column ${o(e.name)} ${c(e.type)}`),", ")};
        `:_``,f=function(e,t){let n=[];for(let[a,r]of Object.entries(t))a in e?e[a]!==r&&n.push(_`set ${o(a)} ${s(r)}`):n.push(_`add ${o(a)} ${s(r)}`);for(let a of Object.keys(e))a in t||n.push(_`drop ${o(a)}`);return n}(tg(n.options),tf(a));return th([E,g,f.length>0?_`
          alter foreign table ${o(e)}.${o(t)}
          options (${p(f,", ")});
        `:_``])})(t.schema_name,t.table_name,e,t)),"\n");return th([i,g,f,S,A,I,y,O])}],33942);let t$=_`pgmq_public`,tv=_`
  drop function if exists 
    ${t$}.pop(queue_name text),
    ${t$}.send(queue_name text, message jsonb, sleep_seconds integer),
    ${t$}.send_batch(queue_name text, message jsonb[], sleep_seconds integer),
    ${t$}.archive(queue_name text, message_id bigint),
    ${t$}.delete(queue_name text, message_id bigint),
    ${t$}.read(queue_name text, sleep integer, n integer)
  ;

  -- Revoke execute permissions on inner pgmq functions to roles (inverse of enabling)
  do $$
  begin
      if exists (select 1 from pg_namespace where nspname = 'pgmq') then
          -- Revoke privileges on the schema itself
          revoke all on schema pgmq from anon, authenticated, service_role;
          
          -- Revoke default privileges for future objects
          alter default privileges in schema pgmq revoke all on tables from anon, authenticated, service_role;
          alter default privileges in schema pgmq revoke all on sequences from anon, authenticated, service_role;
          alter default privileges in schema pgmq revoke all on functions from anon, authenticated, service_role;
      end if;
  end $$;

  drop schema if exists ${t$};
`;e.s(["HIDE_QUEUES_FROM_POSTGREST_SQL",0,tv,"QUEUES_SCHEMA",0,t$,"getExposeQueuesSQL",0,({isNewerPgmqversion:e})=>{let t=e?_`, conditional := '{}'::jsonb`:_``,n=e?_`, jsonb`:_``;return _`
  create schema if not exists ${t$};
  grant usage on schema ${t$} to postgres, anon, authenticated, service_role;

  create or replace function ${t$}.pop(
      queue_name text
  )
    returns setof pgmq.message_record
    language plpgsql
    set search_path = ''
  as $$
  begin
      return query
      select *
      from pgmq.pop(
          queue_name := queue_name
      );
  end;
  $$;

  comment on function ${t$}.pop(queue_name text) is 'Retrieves and locks the next message from the specified queue.';


  create or replace function ${t$}.send(
      queue_name text,
      message jsonb,
      sleep_seconds integer default 0  -- renamed from 'delay'
  )
    returns setof bigint
    language plpgsql
    set search_path = ''
  as $$
  begin
      return query
      select *
      from pgmq.send(
          queue_name := queue_name,
          msg := message,
          delay := sleep_seconds
      );
  end;
  $$;

  comment on function ${t$}.send(queue_name text, message jsonb, sleep_seconds integer) is 'Sends a message to the specified queue, optionally delaying its availability by a number of seconds.';


  create or replace function ${t$}.send_batch(
      queue_name text,
      messages jsonb[],
      sleep_seconds integer default 0  -- renamed from 'delay'
  )
    returns setof bigint
    language plpgsql
    set search_path = ''
  as $$
  begin
      return query
      select *
      from pgmq.send_batch(
          queue_name := queue_name,
          msgs := messages,
          delay := sleep_seconds
      );
  end;
  $$;

  comment on function ${t$}.send_batch(queue_name text, messages jsonb[], sleep_seconds integer) is 'Sends a batch of messages to the specified queue, optionally delaying their availability by a number of seconds.';


  create or replace function ${t$}.archive(
      queue_name text,
      message_id bigint
  )
    returns boolean
    language plpgsql
    set search_path = ''
  as $$
  begin
      return
      pgmq.archive(
          queue_name := queue_name,
          msg_id := message_id
      );
  end;
  $$;

  comment on function ${t$}.archive(queue_name text, message_id bigint) is 'Archives a message by moving it from the queue to a permanent archive.';


  create or replace function ${t$}.delete(
      queue_name text,
      message_id bigint
  )
    returns boolean
    language plpgsql
    set search_path = ''
  as $$
  begin
      return
      pgmq.delete(
          queue_name := queue_name,
          msg_id := message_id
      );
  end;
  $$;

  comment on function ${t$}.delete(queue_name text, message_id bigint) is 'Permanently deletes a message from the specified queue.';

  create or replace function ${t$}.read(
      queue_name text,
      sleep_seconds integer,
      n integer
  )
    returns setof pgmq.message_record
    language plpgsql
    set search_path = ''
  as $$
  begin
      return query
      select *
      from pgmq.read(
          queue_name := queue_name,
          vt := sleep_seconds,
          qty := n ${t}
      );
  end;
  $$;

  comment on function ${t$}.read(queue_name text, sleep_seconds integer, n integer) is 'Reads up to "n" messages from the specified queue with an optional "sleep_seconds" (visibility timeout).';

  -- Grant execute permissions on wrapper functions to roles
  grant execute on function ${t$}.pop(text) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.pop(text) to postgres, service_role, anon, authenticated;

  grant execute on function ${t$}.send(text, jsonb, integer) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.send(text, jsonb, integer) to postgres, service_role, anon, authenticated;

  grant execute on function ${t$}.send_batch(text, jsonb[], integer) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.send_batch(text, jsonb[], integer) to postgres, service_role, anon, authenticated;

  grant execute on function ${t$}.archive(text, bigint) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.archive(text, bigint) to postgres, service_role, anon, authenticated;

  grant execute on function ${t$}.delete(text, bigint) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.delete(text, bigint) to postgres, service_role, anon, authenticated;

  grant execute on function ${t$}.read(text, integer, integer) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.read(text, integer, integer ${n}) to postgres, service_role, anon, authenticated;

  -- For the service role, we want full access
  -- Grant permissions on existing tables
  grant all privileges on all tables in schema pgmq to postgres, service_role;

  -- Ensure service_role has permissions on future tables
  alter default privileges in schema pgmq grant all privileges on tables to postgres, service_role;

  grant usage on schema pgmq to postgres, anon, authenticated, service_role;


  /*
    Grant access to sequences to API roles by default. Existing table permissions
    continue to enforce insert restrictions. This is necessary to accommodate the
    on-backup hook that rebuild queue table primary keys to avoid a pg_dump segfault.
    This can be removed once logical backups are completely retired.
  */
  grant usage, select, update
  on all sequences in schema pgmq
  to anon, authenticated, service_role;

  alter default privileges in schema pgmq
  grant usage, select, update
  on sequences
  to anon, authenticated, service_role;
`},"getQueuesExposePostgrestStatusSQL",0,()=>_`
    SELECT exists (select schema_name FROM information_schema.schemata WHERE schema_name = '${t$}');
  `],957386),e.s(["getTableRowsCountSql",0,({table:e,filters:t=[],enforceExactCount:n=!1,isReadOnlyContext:a=!1})=>{if(!e)return _``;if(n){let n=new ts().from(e.name,e.schema??void 0).count();t.filter(e=>e.value&&""!==e.value).forEach(e=>{n=n.filter(e.column,e.operator,e.value)});let a=n.toSql(),r=a.endsWith(";")?a.slice(0,-1):a;return _`select (${r}), false as is_estimate;`}{let n=new ts().from(e.name,e.schema??void 0).select();t.filter(e=>e.value&&""!=e.value).forEach(e=>{n=n.filter(e.column,e.operator,e.value)});let r=n.toSql(),i=r.endsWith(";")?r.slice(0,-1):r,o=new ts().from(e.name,e.schema??void 0).count();t.filter(e=>e.value&&""!=e.value).forEach(e=>{o=o.filter(e.column,e.operator,e.value)});let l=o.toSql(),c=l.endsWith(";")?l.slice(0,-1):l;if(a)return _`
with approximation as (
    select
      reltuples as estimate,
      -- Whole-tree heap size. A partitioned PARENT (relkind 'p') has no storage
      -- of its own, so its size is the sum over pg_partition_tree; every other
      -- relkind uses its own heap directly (pg_partition_tree returns NO rows
      -- for a plain non-partitioned table, so it cannot be used unconditionally).
      -- Views/foreign tables yield 0 (-> exact count, unchanged behavior).
      case when relkind = 'p'
        then (select coalesce(sum(pg_relation_size(relid)), 0) from pg_partition_tree(oid))
        else pg_relation_size(oid)
      end as bytes
    from pg_class
    where oid = ${s(e.id)}
)
select
  case
    when estimate > ${s(5e4)} or (estimate = -1 and bytes > ${s(1e7)}) then -1
    else (${c})
  end as count,
  (estimate > ${s(5e4)} or (estimate = -1 and bytes > ${s(1e7)})) as is_estimate
from approximation;
`;{let n=_`pg_temp.count_estimate(${s(i)})`;return _`
${tc}

with approximation as (
    select
      reltuples as estimate,
      -- Whole-tree heap size. A partitioned PARENT (relkind 'p') has no storage
      -- of its own, so its size is the sum over pg_partition_tree; every other
      -- relkind uses its own heap directly (pg_partition_tree returns NO rows
      -- for a plain non-partitioned table, so it cannot be used unconditionally).
      -- Views/foreign tables yield 0 (-> exact count, unchanged behavior).
      case when relkind = 'p'
        then (select coalesce(sum(pg_relation_size(relid)), 0) from pg_partition_tree(oid))
        else pg_relation_size(oid)
      end as bytes
    from pg_class
    where oid = ${s(e.id)}
)
select
  case
    when estimate = -1 and bytes > ${s(1e7)} then ${n}
    when estimate > ${s(5e4)} then ${t.length>0?n:_`estimate`}
    else (${c})
  end as count,
  (estimate > ${s(5e4)} or (estimate = -1 and bytes > ${s(1e7)})) as is_estimate
from approximation;
`}}}],779262);let tT=_`
  DROP TYPE IF EXISTS pg_temp.tabledefs CASCADE;
  CREATE TYPE pg_temp.tabledefs AS ENUM ('PKEY_INTERNAL','PKEY_EXTERNAL','FKEYS_INTERNAL', 'FKEYS_EXTERNAL', 'COMMENTS', 'FKEYS_NONE', 'INCLUDE_TRIGGERS', 'NO_TRIGGERS');

  -- SELECT * FROM pg_temp.pg_get_coldef('sample','orders','id');
  -- DROP FUNCTION pg_temp.pg_get_coldef(text,text,text,boolean);
  CREATE OR REPLACE FUNCTION pg_temp.pg_get_coldef(
    in_schema text,
    in_table  text,
    in_column text,
    oldway    boolean default False
  )
  RETURNS text
  LANGUAGE plpgsql VOLATILE
  AS
  $$
  DECLARE
  v_coldef     text;
  v_dt1        text;
  v_dt2        text;
  v_dt3        text;
  v_nullable   boolean;
  v_position   int;
  v_identity   text;
  v_generated  text;
  v_hasdflt    boolean;
  v_dfltexpr   text;

  BEGIN
    IF oldway THEN
      SELECT pg_catalog.format_type(a.atttypid, a.atttypmod) INTO v_coldef FROM pg_namespace n, pg_class c, pg_attribute a, pg_type t
      WHERE n.nspname = in_schema AND n.oid = c.relnamespace AND c.relname = in_table AND a.attname = in_column and a.attnum > 0 AND a.attrelid = c.oid AND a.atttypid = t.oid ORDER BY a.attnum;
      -- RAISE NOTICE 'DEBUG: oldway=%',v_coldef;
    ELSE
      -- a.attrelid::regclass::text, a.attname
      SELECT CASE WHEN a.atttypid = ANY ('{int,int8,int2}'::regtype[]) AND EXISTS (SELECT FROM pg_attrdef ad WHERE ad.adrelid = a.attrelid AND ad.adnum   = a.attnum AND
      pg_get_expr(ad.adbin, ad.adrelid) = 'nextval(''' || (pg_get_serial_sequence (a.attrelid::regclass::text, a.attname))::regclass || '''::regclass)') THEN CASE a.atttypid
      WHEN 'int'::regtype  THEN 'serial' WHEN 'int8'::regtype THEN 'bigserial' WHEN 'int2'::regtype THEN 'smallserial' END ELSE format_type(a.atttypid, a.atttypmod) END AS data_type
      INTO v_coldef FROM pg_namespace n, pg_class c, pg_attribute a, pg_type t
      WHERE n.nspname = in_schema AND n.oid = c.relnamespace AND c.relname = in_table AND a.attname = in_column and a.attnum > 0 AND a.attrelid = c.oid AND a.atttypid = t.oid ORDER BY a.attnum;
      -- RAISE NOTICE 'DEBUG: newway=%',v_coldef;

      -- Issue#24: not implemented yet
      -- might replace with this below to do more detailed parsing...
      -- SELECT a.atttypid::regtype AS dt1, format_type(a.atttypid, a.atttypmod) as dt2, t.typname as dt3, CASE WHEN not(a.attnotnull) THEN True ELSE False END AS nullable,
      -- a.attnum, a.attidentity, a.attgenerated, a.atthasdef, pg_get_expr(ad.adbin, ad.adrelid) dfltexpr
      -- INTO v_dt1, v_dt2, v_dt3, v_nullable, v_position, v_identity, v_generated, v_hasdflt, v_dfltexpr
      -- FROM pg_attribute a JOIN pg_class c ON (a.attrelid = c.oid) JOIN pg_type t ON (a.atttypid = t.oid) LEFT JOIN pg_attrdef ad ON (a.attrelid = ad.adrelid AND a.attnum = ad.adnum)
      -- WHERE c.relkind in ('r','p') AND a.attnum > 0 AND NOT a.attisdropped AND c.relnamespace::regnamespace::text = in_schema AND c.relname = in_table AND a.attname = in_column;
      -- RAISE NOTICE 'schema=%  table=%  column=%  dt1=%  dt2=%  dt3=%  nullable=%  pos=%  identity=%   generated=%  HasDefault=%  DeftExpr=%', in_schema, in_table, in_column, v_dt1,v_dt2,v_dt3,v_nullable,v_position,v_identity,v_generated,v_hasdflt,v_dfltexpr;
    END IF;
    RETURN v_coldef;
  END;
  $$;

  -- SELECT * FROM pg_temp.pg_get_tabledef('sample', 'address', false);
  DROP FUNCTION IF EXISTS pg_temp.pg_get_tabledef(character varying,character varying,boolean,tabledefs[]);
  CREATE OR REPLACE FUNCTION pg_temp.pg_get_tabledef(
    in_schema varchar,
    in_table varchar,
    _verbose boolean,
    VARIADIC arr pg_temp.tabledefs[] DEFAULT '{}':: pg_temp.tabledefs[]
  )
  RETURNS text
  LANGUAGE plpgsql VOLATILE
  AS
  $$
    DECLARE
      v_qualified text := '';
      v_table_ddl text;
      v_table_oid int;
      v_colrec record;
      v_constraintrec record;
      v_trigrec       record;
      v_indexrec record;
      v_rec           record;
      v_constraint_name text;
      v_constraint_def  text;
      v_pkey_def        text := '';
      v_fkey_def        text := '';
      v_fkey_defs       text := '';
      v_trigger text := '';
      v_partition_key text := '';
      v_partbound text;
      v_parent text;
      v_parent_schema text;
      v_persist text;
      v_temp  text := '';
      v_temp2 text;
      v_relopts text;
      v_tablespace text;
      v_pgversion int;
      bSerial boolean;
      bPartition boolean;
      bInheritance boolean;
      bRelispartition boolean;
      constraintarr text[] := '{}';
      constraintelement text;
      bSkip boolean;
      bVerbose boolean := False;
      v_cnt1   integer;
      v_cnt2   integer;
      search_path_old text := '';
      search_path_new text := '';
      v_partial    boolean;
      v_pos        integer;

      -- assume defaults for ENUMs at the getgo
      pkcnt            int := 0;
      fkcnt            int := 0;
      trigcnt          int := 0;
      cmtcnt           int := 0;
      pktype           pg_temp.tabledefs := 'PKEY_INTERNAL';
      fktype           pg_temp.tabledefs := 'FKEYS_INTERNAL';
      trigtype         pg_temp.tabledefs := 'NO_TRIGGERS';
      arglen           integer;
      vargs            text;
      avarg            pg_temp.tabledefs;

      -- exception variables
      v_ret            text;
      v_diag1          text;
      v_diag2          text;
      v_diag3          text;
      v_diag4          text;
      v_diag5          text;
      v_diag6          text;

    BEGIN
      SET client_min_messages = 'notice';
      IF _verbose THEN bVerbose = True; END IF;

      -- v17 fix: handle case-sensitive
      -- v_qualified = in_schema || '.' || in_table;

      arglen := array_length($4, 1);
      IF arglen IS NULL THEN
          -- nothing to do, so assume defaults
          NULL;
      ELSE
          -- loop thru args
          -- IF 'NO_TRIGGERS' = ANY ($4)
          -- select array_to_string($4, ',', '***') INTO vargs;
          IF bVerbose THEN RAISE NOTICE 'arguments=%', $4; END IF;
          FOREACH avarg IN ARRAY $4 LOOP
              IF bVerbose THEN RAISE NOTICE 'arg=%', avarg; END IF;
              IF avarg = 'FKEYS_INTERNAL' OR avarg = 'FKEYS_EXTERNAL' OR avarg = 'FKEYS_NONE' THEN
                  fkcnt = fkcnt + 1;
                  fktype = avarg;
              ELSEIF avarg = 'INCLUDE_TRIGGERS' OR avarg = 'NO_TRIGGERS' THEN
                  trigcnt = trigcnt + 1;
                  trigtype = avarg;
              ELSEIF avarg = 'PKEY_EXTERNAL' THEN
                  pkcnt = pkcnt + 1;
                  pktype = avarg;
              ELSEIF avarg = 'COMMENTS' THEN
                  cmtcnt = cmtcnt + 1;

              END IF;
          END LOOP;
          IF fkcnt > 1 THEN
              RAISE WARNING 'Only one foreign key option can be provided. You provided %', fkcnt;
              RETURN '';
          ELSEIF trigcnt > 1 THEN
              RAISE WARNING 'Only one trigger option can be provided. You provided %', trigcnt;
              RETURN '';
          ELSEIF pkcnt > 1 THEN
              RAISE WARNING 'Only one pkey option can be provided. You provided %', pkcnt;
              RETURN '';
          ELSEIF cmtcnt > 1 THEN
              RAISE WARNING 'Only one comments option can be provided. You provided %', cmtcnt;
              RETURN '';

          END IF;
      END IF;

      SELECT c.oid, (select setting from pg_settings where name = 'server_version_num') INTO v_table_oid, v_pgversion FROM pg_catalog.pg_class c LEFT JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
      WHERE c.relkind in ('r','p') AND c.relname = in_table AND n.nspname = in_schema;

    -- set search_path = public before we do anything to force explicit schema qualification but dont forget to set it back before exiting...
      SELECT setting INTO search_path_old FROM pg_settings WHERE name = 'search_path';

      -- RAISE NOTICE 'DEBUG tableddl: saving old search_path: ***%***', search_path_old;
      EXECUTE 'SET search_path = "public"';
      SELECT setting INTO search_path_new FROM pg_settings WHERE name = 'search_path';
      -- RAISE NOTICE 'DEBUG tableddl: using new search path=***%***', search_path_new;

      -- throw an error if table was not found
      IF (v_table_oid IS NULL) THEN
        RAISE EXCEPTION 'table does not exist';
      END IF;

      -- get user-defined tablespaces if applicable
      SELECT tablespace INTO v_temp FROM pg_tables WHERE schemaname = in_schema and tablename = in_table and tablespace IS NOT NULL;
      IF v_temp IS NULL THEN
        v_tablespace := 'TABLESPACE pg_default';
      ELSE
        v_tablespace := 'TABLESPACE ' || v_temp;
      END IF;

      -- also see if there are any SET commands for this table, ie, autovacuum_enabled=off, fillfactor=70
      WITH relopts AS (SELECT unnest(c.reloptions) relopts FROM pg_class c, pg_namespace n WHERE n.nspname = in_schema and n.oid = c.relnamespace and c.relname = in_table)
      SELECT string_agg(r.relopts, ', ') as relopts INTO v_temp from relopts r;
      IF v_temp IS NULL THEN
        v_relopts := '';
      ELSE
        v_relopts := ' WITH (' || v_temp || ')';
      END IF;

      -- -----------------------------------------------------------------------------------
      -- Create table defs for partitions/children using inheritance or declarative methods.
      -- inheritance: pg_class.relkind = 'r'   pg_class.relispartition=false   pg_class.relpartbound is NULL
      -- declarative: pg_class.relkind = 'r'   pg_class.relispartition=true    pg_class.relpartbound is NOT NULL
      -- -----------------------------------------------------------------------------------
      v_partbound := '';
      bPartition := False;
      bInheritance := False;
      IF v_pgversion < 100000 THEN
        -- Issue#11: handle parent schema
        SELECT c2.relname parent, n2.nspname INTO v_parent, v_parent_schema from pg_class c1, pg_namespace n, pg_inherits i, pg_class c2, pg_namespace n2
        WHERE n.nspname = in_schema and n.oid = c1.relnamespace and c1.relname = in_table and c1.oid = i.inhrelid and i.inhparent = c2.oid and c1.relkind = 'r' and n2.oid = c2.relnamespace;
        IF (v_parent IS NOT NULL) THEN
          bPartition   := True;
          bInheritance := True;
        END IF;
      ELSE
        -- Issue#11: handle parent schema
        SELECT c2.relname parent, c1.relispartition, pg_get_expr(c1.relpartbound, c1.oid, true), n2.nspname INTO v_parent, bRelispartition, v_partbound, v_parent_schema from pg_class c1, pg_namespace n, pg_inherits i, pg_class c2, pg_namespace n2
        WHERE n.nspname = in_schema and n.oid = c1.relnamespace and c1.relname = in_table and c1.oid = i.inhrelid and i.inhparent = c2.oid and c1.relkind = 'r' and n2.oid = c2.relnamespace;
        IF (v_parent IS NOT NULL) THEN
          bPartition   := True;
          IF bRelispartition THEN
            bInheritance := False;
          ELSE
            bInheritance := True;
          END IF;
        END IF;
      END IF;
      IF bPartition THEN
        --Issue#17 fix for case-sensitive tables
        -- Supabase perf fix: the original scanned all of information_schema.tables (O(catalog) with
        -- per-row privilege checks) just to detect uppercase in the table name; the name is already
        -- in hand, so test it directly. The table's existence was validated above via v_table_oid.
        -- SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
        -- WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = in_schema AND t.table_name = in_table AND t.table_type = 'BASE TABLE');
        v_cnt1 := CASE WHEN in_table ~ '[A-Z]' THEN 1 ELSE 0 END;

        --Issue#19 put double-quotes around SQL keyword column names
        -- Issue#121: fix keyword lookup for table name not column name that does not apply here
        -- SELECT COUNT(*) INTO v_cnt2 FROM pg_get_keywords() WHERE word = v_colrec.column_name AND catcode = 'R';
        SELECT COUNT(*) INTO v_cnt2 FROM pg_get_keywords() WHERE word = in_table AND catcode = 'R';

        IF bInheritance THEN
          -- inheritance-based
          IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
            v_table_ddl := 'CREATE TABLE ' || quote_ident(in_schema) || '.' || quote_ident(in_table) || '( '|| E'\\n';
          ELSE
            v_table_ddl := 'CREATE TABLE ' || quote_ident(in_schema) || '.' || quote_ident(in_table) || '( '|| E'\\n';
          END IF;

          -- Jump to constraints section to add the check constraints
        ELSE
          -- declarative-based
          IF v_relopts <> '' THEN
            IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
              v_table_ddl := 'CREATE TABLE ' || quote_ident(in_schema) || '.' || quote_ident(in_table) || ' PARTITION OF ' || quote_ident(in_schema) || '.' || quote_ident(v_parent) || ' ' || v_partbound || v_relopts || ' ' || v_tablespace || '; ' || E'\\n';
            ELSE
              v_table_ddl := 'CREATE TABLE ' || quote_ident(in_schema) || '.' || quote_ident(in_table) || ' PARTITION OF ' || quote_ident(in_schema) || '.' || quote_ident(v_parent) || ' ' || v_partbound || v_relopts || ' ' || v_tablespace || '; ' || E'\\n';
            END IF;
          ELSE
            IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
              v_table_ddl := 'CREATE TABLE ' || quote_ident(in_schema) || '.' || quote_ident(in_table) || ' PARTITION OF ' || quote_ident(in_schema) || '.' || quote_ident(v_parent) || ' ' || v_partbound || ' ' || v_tablespace || '; ' || E'\\n';
            ELSE
              v_table_ddl := 'CREATE TABLE ' || quote_ident(in_schema) || '.' || quote_ident(in_table) || ' PARTITION OF ' || quote_ident(in_schema) || '.' || quote_ident(v_parent) || ' ' || v_partbound || ' ' || v_tablespace || '; ' || E'\\n';
            END IF;
          END IF;
          -- Jump to constraints and index section to add the check constraints and indexes and perhaps FKeys
        END IF;
      END IF;
      IF bVerbose THEN RAISE NOTICE '(1)tabledef so far: %', v_table_ddl; END IF;

      IF NOT bPartition THEN
        -- see if this is unlogged or temporary table
        select c.relpersistence into v_persist from pg_class c, pg_namespace n where n.nspname = in_schema and n.oid = c.relnamespace and c.relname = in_table and c.relkind = 'r';
        IF v_persist = 'u' THEN
          v_temp := 'UNLOGGED';
        ELSIF v_persist = 't' THEN
          v_temp := 'TEMPORARY';
        ELSE
          v_temp := '';
        END IF;
      END IF;

      -- start the create definition for regular tables unless we are in progress creating an inheritance-based child table
      IF NOT bPartition THEN
        --Issue#17 fix for case-sensitive tables
        -- Supabase perf fix: same as the partition branch above — replace the O(catalog)
        -- information_schema.tables scan with a direct uppercase test on the known table name.
        -- SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
        -- WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = in_schema AND t.table_name = in_table AND t.table_type = 'BASE TABLE');
        v_cnt1 := CASE WHEN in_table ~ '[A-Z]' THEN 1 ELSE 0 END;
        IF v_cnt1 > 0 THEN
          v_table_ddl := 'CREATE ' || v_temp || ' TABLE ' || quote_ident(in_schema) || '.' || quote_ident(in_table) || ' (' || E'\\n';
        ELSE
          v_table_ddl := 'CREATE ' || v_temp || ' TABLE ' || quote_ident(in_schema) || '.' || quote_ident(in_table) || ' (' || E'\\n';
        END IF;
      END IF;
      -- RAISE NOTICE 'DEBUG2: tabledef so far: %', v_table_ddl;
      -- define all of the columns in the table unless we are in progress creating an inheritance-based child table
      IF NOT bPartition THEN
        FOR v_colrec IN
          SELECT c.column_name, c.data_type, c.udt_name, c.udt_schema, c.character_maximum_length, c.is_nullable, c.column_default, c.numeric_precision, c.numeric_scale, c.is_identity, c.identity_generation, c.is_generated, c.generation_expression
          FROM information_schema.columns c WHERE (table_schema, table_name) = (in_schema, in_table) ORDER BY ordinal_position
        LOOP
          IF bVerbose THEN RAISE NOTICE '(col loop) name=%  type=%  udt_name=%  default=%  is_generated=%  gen_expr=%', v_colrec.column_name, v_colrec.data_type, v_colrec.udt_name, v_colrec.column_default, v_colrec.is_generated, v_colrec.generation_expression; END IF;

          -- v17 fix: handle case-sensitive for pg_get_serial_sequence that requires SQL Identifier handling
          -- SELECT CASE WHEN pg_get_serial_sequence(v_qualified, v_colrec.column_name) IS NOT NULL THEN True ELSE False END into bSerial;
          SELECT CASE WHEN pg_get_serial_sequence(quote_ident(in_schema) || '.' || quote_ident(in_table), v_colrec.column_name) IS NOT NULL THEN True ELSE False END into bSerial;
          IF bVerbose THEN
            -- v17 fix: handle case-sensitive for pg_get_serial_sequence that requires SQL Identifier handling
            -- SELECT pg_get_serial_sequence(v_qualified, v_colrec.column_name) into v_temp;
            SELECT pg_get_serial_sequence(quote_ident(in_schema) || '.' || quote_ident(in_table), v_colrec.column_name) into v_temp;
            IF v_temp IS NULL THEN v_temp = 'NA'; END IF;
            SELECT pg_temp.pg_get_coldef(in_schema, in_table,v_colrec.column_name) INTO v_diag1;
            RAISE NOTICE 'DEBUG table: %  Column: %  datatype: %  Serial=%  serialval=%  coldef=%', v_qualified, v_colrec.column_name, v_colrec.data_type, bSerial, v_temp, v_diag1;
            RAISE NOTICE 'DEBUG tabledef: %', v_table_ddl;
          END IF;

          --Issue#17 put double-quotes around case-sensitive column names
          -- Supabase perf fix: the original scanned all of information_schema.columns (O(total
          -- columns in the database), with per-row privilege checks) PER COLUMN just to detect
          -- uppercase in the column name — the dominant cost of this function on large catalogs.
          -- The name is already in hand, so test it directly. The quote_ident(in_schema) = in_schema
          -- comparison preserves the original's behavior of never matching (count 0) when the
          -- schema name itself needs quoting, since it compared t.table_schema = quote_ident(in_schema).
          -- SELECT COUNT(*) INTO v_cnt1 FROM information_schema.columns t WHERE EXISTS (SELECT REGEXP_MATCHES(s.column_name, '([A-Z]+)','g') FROM information_schema.columns s
          -- WHERE t.table_schema=s.table_schema and t.table_name=s.table_name and t.column_name=s.column_name AND t.table_schema = quote_ident(in_schema) AND column_name = v_colrec.column_name);
          v_cnt1 := CASE WHEN quote_ident(in_schema) = in_schema AND v_colrec.column_name ~ '[A-Z]' THEN 1 ELSE 0 END;

          --Issue#19 put double-quotes around SQL keyword column names
          SELECT COUNT(*) INTO v_cnt2 FROM pg_get_keywords() WHERE word = v_colrec.column_name AND catcode = 'R';

          IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
            v_table_ddl := v_table_ddl || '  ' || quote_ident(v_colrec.column_name) || ' ';
          ELSE
            v_table_ddl := v_table_ddl || '  ' || quote_ident(v_colrec.column_name) || ' ';
          END IF;

          -- Issue#23: Handle autogenerated columns and rewrite as a simpler IF THEN ELSE branch instead of a much more complex embedded CASE STATEMENT
          IF v_colrec.is_generated = 'ALWAYS' and v_colrec.generation_expression IS NOT NULL THEN
              -- searchable tsvector GENERATED ALWAYS AS (to_tsvector('simple'::regconfig, COALESCE(translate(email, '@.-'::citext, ' '::text), ''::text)) ) STORED
              v_temp = v_colrec.data_type || ' GENERATED ALWAYS AS (' || v_colrec.generation_expression || ') STORED ';
          ELSEIF v_colrec.udt_name in ('geometry', 'box2d', 'box2df', 'box3d', 'geography', 'geometry_dump', 'gidx', 'spheroid', 'valid_detail') THEN
              v_temp = v_colrec.udt_name;
          ELSEIF v_colrec.data_type = 'USER-DEFINED' THEN
              v_temp = quote_ident(v_colrec.udt_schema) || '.' || quote_ident(v_colrec.udt_name);
          ELSEIF v_colrec.data_type = 'ARRAY' THEN
                -- Issue#6 fix: handle arrays
              v_temp = pg_temp.pg_get_coldef(in_schema, in_table,v_colrec.column_name);
              -- v17 fix: handle case-sensitive for pg_get_serial_sequence that requires SQL Identifier handling
              -- WHEN pg_get_serial_sequence(v_qualified, v_colrec.column_name) IS NOT NULL
          ELSEIF pg_get_serial_sequence(quote_ident(in_schema) || '.' || quote_ident(in_table), v_colrec.column_name) IS NOT NULL THEN
              -- Issue#8 fix: handle serial. Note: NOT NULL is implied so no need to declare it explicitly
              v_temp = pg_temp.pg_get_coldef(in_schema, in_table,v_colrec.column_name);
          ELSE
              v_temp = v_colrec.data_type;
          END IF;
          -- RAISE NOTICE 'column def1=%', v_temp;

          -- handle IDENTITY columns
          IF v_colrec.is_identity = 'YES' THEN
              IF v_colrec.identity_generation = 'ALWAYS' THEN
                  v_temp = v_temp || ' GENERATED ALWAYS AS IDENTITY';
              ELSE
                  v_temp = v_temp || ' GENERATED BY DEFAULT AS IDENTITY';
              END IF;
          ELSEIF v_colrec.character_maximum_length IS NOT NULL THEN
              v_temp = v_temp || ('(' || v_colrec.character_maximum_length || ')');
          ELSEIF v_colrec.numeric_precision > 0 AND v_colrec.numeric_scale > 0 THEN
              v_temp = v_temp || '(' || v_colrec.numeric_precision || ',' || v_colrec.numeric_scale || ')';
          END IF;

          -- Handle NULL/NOT NULL
          IF bSerial THEN
              v_temp = v_temp || ' NOT NULL';
          ELSEIF v_colrec.is_nullable = 'NO' THEN
              v_temp = v_temp || ' NOT NULL';
          ELSEIF v_colrec.is_nullable = 'YES' THEN
              v_temp = v_temp || ' NULL';
          END IF;

          -- Handle defaults
          IF v_colrec.column_default IS NOT null AND NOT bSerial THEN
              -- RAISE NOTICE 'Setting default for column, %', v_colrec.column_name;
              v_temp = v_temp || (' DEFAULT ' || v_colrec.column_default);
          END IF;
          v_temp = v_temp || ',' || E'\\n';
          -- RAISE NOTICE 'column def2=%', v_temp;
          v_table_ddl := v_table_ddl || v_temp;
          -- RAISE NOTICE 'tabledef=%', v_table_ddl;

        END LOOP;
      END IF;
      IF bVerbose THEN RAISE NOTICE '(2)tabledef so far: %', v_table_ddl; END IF;

      -- define all the constraints: conparentid does not exist pre PGv11
      IF v_pgversion < 110000 THEN
        FOR v_constraintrec IN
          SELECT con.conname as constraint_name, con.contype as constraint_type,
            CASE
              WHEN con.contype = 'p' THEN 1 -- primary key constraint
              WHEN con.contype = 'u' THEN 2 -- unique constraint
              WHEN con.contype = 'f' THEN 3 -- foreign key constraint
              WHEN con.contype = 'c' THEN 4
              ELSE 5
            END as type_rank,
            pg_get_constraintdef(con.oid) as constraint_definition
          FROM pg_catalog.pg_constraint con JOIN pg_catalog.pg_class rel ON rel.oid = con.conrelid JOIN pg_catalog.pg_namespace nsp ON nsp.oid = connamespace
          WHERE nsp.nspname = in_schema AND rel.relname = in_table ORDER BY type_rank
        LOOP
          v_constraint_name := v_constraintrec.constraint_name;
          v_constraint_def  := v_constraintrec.constraint_definition;
          IF v_constraintrec.type_rank = 1 THEN
              IF pkcnt = 0 OR pktype = 'PKEY_INTERNAL' THEN
                  -- internal def
                  v_constraint_name := v_constraintrec.constraint_name;
                  v_constraint_def  := v_constraintrec.constraint_definition;
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || quote_ident(v_constraint_name) || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              ELSE
                -- Issue#16 handle external PG def
                SELECT 'ALTER TABLE ONLY ' || quote_ident(in_schema) || '.' || quote_ident(c.relname) || ' ADD CONSTRAINT ' || quote_ident(r.conname) || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_pkey_def
                FROM pg_catalog.pg_constraint r, pg_class c, pg_namespace n where r.conrelid = c.oid and  r.contype = 'p' and n.oid = r.connamespace and n.nspname = in_schema AND c.relname = in_table and r.conname = v_constraint_name;
              END IF;
              IF bPartition THEN
                continue;
              END IF;
          ELSIF v_constraintrec.type_rank = 3 THEN
              -- handle foreign key constraints
              --Issue#22 fix: added FKEY_NONE check
              IF fktype = 'FKEYS_NONE' THEN
                  -- skip
                  continue;
              ELSIF fkcnt = 0 OR fktype = 'FKEYS_INTERNAL' THEN
                  -- internal def
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || quote_ident(v_constraint_name) || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              ELSE
                  -- external def
                  SELECT 'ALTER TABLE ONLY ' || quote_ident(n.nspname) || '.' || quote_ident(c2.relname) || ' ADD CONSTRAINT ' || quote_ident(r.conname) || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_fkey_def
                  FROM pg_constraint r, pg_class c1, pg_namespace n, pg_class c2 where r.conrelid = c1.oid and  r.contype = 'f' and n.nspname = in_schema and n.oid = r.connamespace and r.conrelid = c2.oid and c2.relname = in_table;
                  v_fkey_defs = v_fkey_defs || v_fkey_def || E'\\n';
              END IF;
          ELSE
              -- handle all other constraints besides PKEY and FKEYS as internal defs by default
              v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                || 'CONSTRAINT' || ' '
                || quote_ident(v_constraint_name) || ' '
                || v_constraint_def
                || ',' || E'\\n';
          END IF;
          if bVerbose THEN RAISE NOTICE 'DEBUG4: constraint name=% constraint_def=%', v_constraint_name,v_constraint_def; END IF;
          constraintarr := constraintarr || v_constraintrec.constraint_name:: text;

        END LOOP;
      ELSE
        -- handle PG versions 11 and up
        -- Issue#20: Fix logic for external PKEY and FKEYS
        FOR v_constraintrec IN
          SELECT con.conname as constraint_name, con.contype as constraint_type,
            CASE
              WHEN con.contype = 'p' THEN 1 -- primary key constraint
              WHEN con.contype = 'u' THEN 2 -- unique constraint
              WHEN con.contype = 'f' THEN 3 -- foreign key constraint
              WHEN con.contype = 'c' THEN 4
              ELSE 5
            END as type_rank,
            pg_get_constraintdef(con.oid) as constraint_definition
          FROM pg_catalog.pg_constraint con JOIN pg_catalog.pg_class rel ON rel.oid = con.conrelid JOIN pg_catalog.pg_namespace nsp ON nsp.oid = connamespace
          WHERE nsp.nspname = in_schema AND rel.relname = in_table
                --Issue#13 added this condition:
                AND con.conparentid = 0
                ORDER BY type_rank
        LOOP
          v_constraint_name := v_constraintrec.constraint_name;
          v_constraint_def  := v_constraintrec.constraint_definition;
          IF v_constraintrec.type_rank = 1 THEN
              IF pkcnt = 0 OR pktype = 'PKEY_INTERNAL' THEN
                  -- internal def
                  v_constraint_name := v_constraintrec.constraint_name;
                  v_constraint_def  := v_constraintrec.constraint_definition;
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || quote_ident(v_constraint_name) || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              ELSE
                -- Issue#16 handle external PG def
                SELECT 'ALTER TABLE ONLY ' || quote_ident(in_schema) || '.' || quote_ident(c.relname) || ' ADD CONSTRAINT ' || quote_ident(r.conname) || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_pkey_def
                FROM pg_catalog.pg_constraint r, pg_class c, pg_namespace n where r.conrelid = c.oid and  r.contype = 'p' and n.oid = r.connamespace and n.nspname = in_schema AND c.relname = in_table;
              END IF;
              IF bPartition THEN
                continue;
              END IF;
          ELSIF v_constraintrec.type_rank = 3 THEN
              -- handle foreign key constraints
              --Issue#22 fix: added FKEY_NONE check
              IF fktype = 'FKEYS_NONE' THEN
                  -- skip
                  continue;
              ELSIF fkcnt = 0 OR fktype = 'FKEYS_INTERNAL' THEN
                  -- internal def
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || quote_ident(v_constraint_name) || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              ELSE
                  -- external def
                  SELECT 'ALTER TABLE ONLY ' || quote_ident(n.nspname) || '.' || quote_ident(c2.relname) || ' ADD CONSTRAINT ' || quote_ident(r.conname) || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_fkey_def
                  FROM pg_constraint r, pg_class c1, pg_namespace n, pg_class c2 where r.conrelid = c1.oid and  r.contype = 'f' and n.nspname = in_schema and n.oid = r.connamespace and r.conrelid = c2.oid and c2.relname = in_table and
                  r.conname = v_constraint_name and r.conparentid = 0;
                  v_fkey_defs = v_fkey_defs || v_fkey_def || E'\\n';
              END IF;
          ELSE
              -- handle all other constraints besides PKEY and FKEYS as internal defs by default
              v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                || 'CONSTRAINT' || ' '
                || quote_ident(v_constraint_name) || ' '
                || v_constraint_def
                || ',' || E'\\n';
          END IF;
          if bVerbose THEN RAISE NOTICE 'DEBUG4: constraint name=% constraint_def=%', v_constraint_name,v_constraint_def; END IF;
          constraintarr := constraintarr || v_constraintrec.constraint_name:: text;

        END LOOP;
      END IF;

      -- drop the last comma before ending the create statement, which should be right before the carriage return character
      -- Issue#24: make sure the comma is there before removing it
      select substring(v_table_ddl, length(v_table_ddl) - 1, 1) INTO v_temp;
      IF v_temp = ',' THEN
          v_table_ddl = substr(v_table_ddl, 0, length(v_table_ddl) - 1) || E'\\n';
      END IF;
      IF bVerbose THEN RAISE NOTICE '(3)tabledef so far: %', trim(v_table_ddl); END IF;

      -- ---------------------------------------------------------------------------
      -- at this point we have everything up to the last table-enclosing parenthesis
      -- ---------------------------------------------------------------------------
      IF bVerbose THEN RAISE NOTICE '(4)tabledef so far: %', v_table_ddl; END IF;

      -- See if this is an inheritance-based child table and finish up the table create.
      IF bPartition and bInheritance THEN
        -- Issue#11: handle parent schema
        -- v_table_ddl := v_table_ddl || ') INHERITS (' || in_schema || '.' || v_parent || ') ' || E'\\n' || v_relopts || ' ' || v_tablespace || ';' || E'\\n';
        IF v_parent_schema = '' OR v_parent_schema IS NULL THEN v_parent_schema = in_schema; END IF;
        v_table_ddl := v_table_ddl || ') INHERITS (' || quote_ident(v_parent_schema) || '.' || quote_ident(v_parent) || ') ' || E'\\n' || v_relopts || ' ' || v_tablespace || ';' || E'\\n';
      END IF;

      IF v_pgversion >= 100000 AND NOT bPartition and NOT bInheritance THEN
        -- See if this is a partitioned table (pg_class.relkind = 'p') and add the partitioned key
        SELECT pg_get_partkeydef(c1.oid) as partition_key INTO v_partition_key FROM pg_class c1 JOIN pg_namespace n ON (n.oid = c1.relnamespace) LEFT JOIN pg_partitioned_table p ON (c1.oid = p.partrelid)
        WHERE n.nspname = in_schema and n.oid = c1.relnamespace and c1.relname = in_table and c1.relkind = 'p';

        IF v_partition_key IS NOT NULL AND v_partition_key <> '' THEN
          -- add partition clause
          -- NOTE:  cannot specify default tablespace for partitioned relations
          -- v_table_ddl := v_table_ddl || ') PARTITION BY ' || v_partition_key || ' ' || v_tablespace || ';' || E'\\n';
          v_table_ddl := v_table_ddl || ') PARTITION BY ' || v_partition_key || ';' || E'\\n';
        ELSEIF v_relopts <> '' THEN
          v_table_ddl := v_table_ddl || ') ' || v_relopts || ' ' || v_tablespace || ';' || E'\\n';
        ELSE
          -- end the create definition
          v_table_ddl := v_table_ddl || ') ' || v_tablespace || ';' || E'\\n';
        END IF;
      END IF;

      IF bVerbose THEN RAISE NOTICE '(5)tabledef so far: %', v_table_ddl; END IF;

      -- Add closing paren for regular tables
      -- IF NOT bPartition THEN
      -- v_table_ddl := v_table_ddl || ') ' || v_relopts || ' ' || v_tablespace || E';\\n';
      -- END IF;
      -- RAISE NOTICE 'ddlsofar3: %', v_table_ddl;

      -- Issue#16 create the external PKEY def if indicated
      IF v_pkey_def <> '' THEN
          v_table_ddl := v_table_ddl || v_pkey_def || E'\\n';
      END IF;

      -- Issue#20
      IF v_fkey_defs <> '' THEN
            v_table_ddl := v_table_ddl || v_fkey_defs || E'\\n';
      END IF;

      IF bVerbose THEN RAISE NOTICE '(6)tabledef so far: %', v_table_ddl; END IF;

      -- create indexes
      FOR v_indexrec IN
        SELECT indexdef, COALESCE(tablespace, 'pg_default') as tablespace, indexname FROM pg_indexes WHERE (schemaname, tablename) = (in_schema, in_table)
      LOOP
        -- RAISE NOTICE 'DEBUG6: indexname=%  indexdef=%', v_indexrec.indexname, v_indexrec.indexdef;
        -- loop through constraints and skip ones already defined
        bSkip = False;
        FOREACH constraintelement IN ARRAY constraintarr
        LOOP
          IF constraintelement = v_indexrec.indexname THEN
              -- RAISE NOTICE 'DEBUG7: skipping index, %', v_indexrec.indexname;
              bSkip = True;
              EXIT;
          END IF;
        END LOOP;
        if bSkip THEN CONTINUE; END IF;

        -- Add IF NOT EXISTS clause so partition index additions will not be created if declarative partition in effect and index already created on parent
        v_indexrec.indexdef := REPLACE(v_indexrec.indexdef, 'CREATE INDEX', 'CREATE INDEX IF NOT EXISTS');
        -- Fix Issue#26: do it for unique/primary key indexes as well
        v_indexrec.indexdef := REPLACE(v_indexrec.indexdef, 'CREATE UNIQUE INDEX', 'CREATE UNIQUE INDEX IF NOT EXISTS');
        -- RAISE NOTICE 'DEBUG8: adding index, %', v_indexrec.indexname;

        -- NOTE:  cannot specify default tablespace for partitioned relations
        IF v_partition_key IS NOT NULL AND v_partition_key <> '' THEN
            v_table_ddl := v_table_ddl || v_indexrec.indexdef || ';' || E'\\n';
        ELSE
            -- Issue#25: see if partial index or not
            -- Supabase perf fix: scope by the table OID resolved earlier instead of casting
            -- relnamespace::regnamespace::text for every pg_class row (O(catalog) per index).
            -- Indexes always live in the same schema as their table, so the schema quals were
            -- redundant with v_table_oid.
            -- select CASE WHEN i.indpred IS NOT NULL THEN True ELSE False END INTO v_partial
            -- FROM pg_index i JOIN pg_class c1 ON (i.indexrelid = c1.oid) JOIN pg_class c2 ON (i.indrelid = c2.oid)
            -- WHERE c1.relnamespace::regnamespace::text = in_schema AND c2.relnamespace::regnamespace::text = in_schema AND c2.relname = in_table AND c1.relname = v_indexrec.indexname;
            select CASE WHEN i.indpred IS NOT NULL THEN True ELSE False END INTO v_partial
            FROM pg_index i JOIN pg_class c1 ON (i.indexrelid = c1.oid)
            WHERE i.indrelid = v_table_oid AND c1.relname = v_indexrec.indexname;
            IF v_partial THEN
                -- Put tablespace def before WHERE CLAUSE
                v_temp = v_indexrec.indexdef;
                v_pos = POSITION(' WHERE ' IN v_temp);
                v_temp2 = SUBSTRING(v_temp, v_pos);
                v_temp  = SUBSTRING(v_temp, 1, v_pos);
                v_table_ddl := v_table_ddl || v_temp || ' TABLESPACE ' || quote_ident(v_indexrec.tablespace) || v_temp2 || ';' || E'\\n';
            ELSE
                v_table_ddl := v_table_ddl || v_indexrec.indexdef || ' TABLESPACE ' || quote_ident(v_indexrec.tablespace) || ';' || E'\\n';
            END IF;
        END IF;

      END LOOP;
      IF bVerbose THEN RAISE NOTICE '(7)tabledef so far: %', v_table_ddl; END IF;

      -- Issue#20: added logic for table and column comments
      IF  cmtcnt > 0 THEN
          FOR v_rec IN
            SELECT c.relname, 'COMMENT ON ' || CASE WHEN c.relkind in ('r','p') AND a.attname IS NULL THEN 'TABLE ' WHEN c.relkind in ('r','p') AND a.attname IS NOT NULL THEN 'COLUMN ' WHEN c.relkind = 'f' THEN 'FOREIGN TABLE '
                  WHEN c.relkind = 'm' THEN 'MATERIALIZED VIEW ' WHEN c.relkind = 'v' THEN 'VIEW ' WHEN c.relkind = 'i' THEN 'INDEX ' WHEN c.relkind = 'S' THEN 'SEQUENCE ' ELSE 'XX' END || quote_ident(n.nspname) || '.' ||
                  CASE WHEN c.relkind in ('r','p') AND a.attname IS NOT NULL THEN quote_ident(c.relname) || '.' || quote_ident(a.attname) ELSE quote_ident(c.relname) END || ' IS '   || quote_literal(d.description) || ';' as ddl
            FROM pg_class c JOIN pg_namespace n ON (n.oid = c.relnamespace) LEFT JOIN pg_description d ON (c.oid = d.objoid) LEFT JOIN pg_attribute a ON (c.oid = a.attrelid AND a.attnum > 0 and a.attnum = d.objsubid)
            WHERE d.description IS NOT NULL AND n.nspname = in_schema AND c.relname = in_table ORDER BY 2 desc, ddl
          LOOP
              --RAISE NOTICE 'comments:%', v_rec.ddl;
              v_table_ddl = v_table_ddl || v_rec.ddl || E'\\n';
          END LOOP;
      END IF;
      IF bVerbose THEN RAISE NOTICE '(8)tabledef so far: %', v_table_ddl; END IF;

      IF trigtype = 'INCLUDE_TRIGGERS' THEN
        -- Issue#14: handle multiple triggers for a table
        FOR v_trigrec IN
            select pg_get_triggerdef(t.oid, True) || ';' as triggerdef FROM pg_trigger t, pg_class c, pg_namespace n
            WHERE n.nspname = in_schema and n.oid = c.relnamespace and c.relname = in_table and c.relkind = 'r' and t.tgrelid = c.oid and NOT t.tgisinternal
        LOOP
            v_table_ddl := v_table_ddl || v_trigrec.triggerdef;
            v_table_ddl := v_table_ddl || E'\\n';
            IF bVerbose THEN RAISE NOTICE 'triggerdef = %', v_trigrec.triggerdef; END IF;
        END LOOP;
      END IF;

      IF bVerbose THEN RAISE NOTICE '(9)tabledef so far: %', v_table_ddl; END IF;
      -- add empty line
      v_table_ddl := v_table_ddl || E'\\n';
      IF bVerbose THEN RAISE NOTICE '(10)tabledef so far: %', v_table_ddl; END IF;

      -- reset search_path back to what it was
      IF search_path_old = '' THEN
        SELECT set_config('search_path', '', false) into v_temp;
      ELSE
        EXECUTE 'SET search_path = ' || search_path_old;
      END IF;

      RETURN v_table_ddl;

      EXCEPTION
      WHEN others THEN
      BEGIN
        GET STACKED DIAGNOSTICS v_diag1 = MESSAGE_TEXT, v_diag2 = PG_EXCEPTION_DETAIL, v_diag3 = PG_EXCEPTION_HINT, v_diag4 = RETURNED_SQLSTATE, v_diag5 = PG_CONTEXT, v_diag6 = PG_EXCEPTION_CONTEXT;
        -- v_ret := 'line=' || v_diag6 || '. '|| v_diag4 || '. ' || v_diag1 || ' .' || v_diag2 || ' .' || v_diag3;
        v_ret := 'line=' || v_diag6 || '. '|| v_diag4 || '. ' || v_diag1;
        RAISE EXCEPTION '%', v_ret;
        -- put additional coding here if necessarY
        RETURN '';
      END;

    END;
  $$;`;e.s(["getTableDefinitionSql",0,({id:e})=>_`
    ${tT}

    with table_info as (
      select 
        n.nspname::text as schema,
        c.relname::text as name
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      where c.oid = ${s(e)}
    )
    select pg_temp.pg_get_tabledef (
      t.schema,
      t.name,
      false,
      'FKEYS_INTERNAL',
      'INCLUDE_TRIGGERS'
    ) as definition
    from table_info t;
  `],538892),e.s(["getTablesPaginatedSql",0,({schema:e,includeColumns:t=!1,limit:n,afterOid:a,nameFilter:r})=>{let i=g(e?[e]:void 0,void 0,e?void 0:u.DEFAULT_SYSTEM_SCHEMAS),o=i?_`and nc.nspname ${i}`:_``,l=r&&r.length>0?e?_`and c.relname ilike ${s(`%${f(r)}%`)}`:_`and (
            c.relname ilike ${s(`%${f(r)}%`)}
            or nc.nspname ilike ${s(`%${f(r)}%`)}
            or (nc.nspname || '.' || c.relname) ilike ${s(`%${f(r)}%`)}
          )`:_``,c=t?_`, columns as (${S({filter:{column:"oid",predicate:_`in (select oid from page)`}})})`:_``,d=t?_`, ${E("columns",_`columns.table_id = tables.id`)}`:_``;return _`
    with page as (
      select
        c.oid,
        c.relname,
        c.relrowsecurity,
        c.relforcerowsecurity,
        c.relreplident,
        nc.nspname as schema,
        -- Computed once here so the final select can reference it for both the
        -- raw byte count and pg_size_pretty without re-walking heap+toast+indexes.
        pg_total_relation_size(c.oid) as bytes_raw
      from pg_namespace nc
      join pg_class c on nc.oid = c.relnamespace
      where c.relkind in ('r', 'p')
        and not pg_is_other_temp_schema(nc.oid)
        and c.oid > ${s(a)}
        and (
          pg_has_role(c.relowner, 'USAGE')
          or has_table_privilege(
            c.oid,
            'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
          )
          or has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
        )
        ${o}
        ${l}
      order by c.oid
      limit ${s(n)}
    ),
    page_primary_keys as (
      select
        c.oid::int8 as table_id,
        jsonb_agg(
          jsonb_build_object(
            'table_id', c.oid::int8,
            'schema', n.nspname,
            'table_name', c.relname,
            'name', a.attname
          )
          order by array_position(i.indkey, a.attnum)
        ) as primary_keys
      from pg_index i
      join pg_class c on i.indrelid = c.oid
      join pg_namespace n on c.relnamespace = n.oid
      join pg_attribute a on a.attrelid = c.oid and a.attnum = any(i.indkey)
      where i.indisprimary
        and c.oid in (select oid from page)
      group by c.oid
    ),
    -- Two-armed UNION ALL keyed by table_id so the downstream join is a plain
    -- equi-join (see tables CTE below). The previous shape used an OR across
    -- (source_oid, target_oid), which planners can't decompose into two index
    -- probes. The target-side arm skips self-referential FKs so they aren't
    -- emitted twice.
    page_relationships as (
      select
        csa.oid::int8 as table_id,
        c.oid::int8 as id,
        c.conname as constraint_name,
        nsa.nspname as source_schema,
        csa.relname as source_table_name,
        sa.attname as source_column_name,
        nta.nspname as target_table_schema,
        cta.relname as target_table_name,
        ta.attname as target_column_name
      from pg_constraint c
      join pg_class csa on csa.oid = c.conrelid
      join pg_namespace nsa on nsa.oid = csa.relnamespace
      -- Pair conkey/confkey by ordinal so composite FKs don't fan out into a
      -- cross-product of (source_col, target_col) rows.
      join lateral unnest(c.conkey, c.confkey) as fk(src_attnum, tgt_attnum) on true
      join pg_attribute sa on sa.attrelid = c.conrelid and sa.attnum = fk.src_attnum
      join pg_class cta on cta.oid = c.confrelid
      join pg_namespace nta on nta.oid = cta.relnamespace
      join pg_attribute ta on ta.attrelid = c.confrelid and ta.attnum = fk.tgt_attnum
      where c.contype = 'f'
        and csa.oid in (select oid from page)
      union all
      select
        cta.oid::int8 as table_id,
        c.oid::int8 as id,
        c.conname as constraint_name,
        nsa.nspname as source_schema,
        csa.relname as source_table_name,
        sa.attname as source_column_name,
        nta.nspname as target_table_schema,
        cta.relname as target_table_name,
        ta.attname as target_column_name
      from pg_constraint c
      join pg_class csa on csa.oid = c.conrelid
      join pg_namespace nsa on nsa.oid = csa.relnamespace
      join lateral unnest(c.conkey, c.confkey) as fk(src_attnum, tgt_attnum) on true
      join pg_attribute sa on sa.attrelid = c.conrelid and sa.attnum = fk.src_attnum
      join pg_class cta on cta.oid = c.confrelid
      join pg_namespace nta on nta.oid = cta.relnamespace
      join pg_attribute ta on ta.attrelid = c.confrelid and ta.attnum = fk.tgt_attnum
      where c.contype = 'f'
        and cta.oid in (select oid from page)
        and cta.oid <> csa.oid
    ),
    tables as (
      select
        p.oid::int8 as id,
        p.schema as schema,
        p.relname as name,
        p.relrowsecurity as rls_enabled,
        p.relforcerowsecurity as rls_forced,
        case
          when p.relreplident = 'd' then 'DEFAULT'
          when p.relreplident = 'i' then 'INDEX'
          when p.relreplident = 'f' then 'FULL'
          else 'NOTHING'
        end as replica_identity,
        p.bytes_raw::int8 as bytes,
        pg_size_pretty(p.bytes_raw) as size,
        pg_stat_get_live_tuples(p.oid) as live_rows_estimate,
        pg_stat_get_dead_tuples(p.oid) as dead_rows_estimate,
        obj_description(p.oid) as comment,
        coalesce(pk.primary_keys, '[]'::jsonb) as primary_keys,
        coalesce(
          jsonb_agg(
            jsonb_build_object(
              'id', r.id,
              'constraint_name', r.constraint_name,
              'source_schema', r.source_schema,
              'source_table_name', r.source_table_name,
              'source_column_name', r.source_column_name,
              'target_table_schema', r.target_table_schema,
              'target_table_name', r.target_table_name,
              'target_column_name', r.target_column_name
            )
          ) filter (where r.id is not null),
          '[]'::jsonb
        ) as relationships
      from page p
      left join page_primary_keys pk on pk.table_id = p.oid
      left join page_relationships r on r.table_id = p.oid
      group by
        p.oid,
        p.schema,
        p.relname,
        p.relrowsecurity,
        p.relforcerowsecurity,
        p.relreplident,
        p.bytes_raw,
        pk.primary_keys
    )${c}
    select tables.*${d}
    from tables
    order by tables.id
  `}],190804);var tS=((t={}).NO_ACTION="a",t.RESTRICT="r",t.CASCADE="c",t.SET_NULL="n",t.SET_DEFAULT="d",t);e.s(["FOREIGN_KEY_CASCADE_ACTION",()=>tS,"getAddForeignKeySQL",0,({table:e,foreignKeys:t})=>{let n=t.map(t=>{let{deletionAction:n,updateAction:a}=t,r="c"===n?_`ON DELETE CASCADE`:"r"===n?_`ON DELETE RESTRICT`:"d"===n?_`ON DELETE SET DEFAULT`:"n"===n?_`ON DELETE SET NULL`:_``,i="c"===a?_`ON UPDATE CASCADE`:"r"===a?_`ON UPDATE RESTRICT`:_``,s=p(t.columns.map(e=>o(e.source)),", "),l=p(t.columns.map(e=>o(e.target)),", ");return _`ALTER TABLE ${o(e.schema)}.${o(e.name)} ADD FOREIGN KEY (${s}) REFERENCES ${o(t.schema)}.${o(t.table)} (${l}) ${i} ${r}`});return _`${p(n,";\n")};`},"getForeignKeyConstraintsSql",0,({schema:e})=>{if(!e)throw Error("schema is required");return _`
SELECT
  con.oid as id,
  con.conname as constraint_name,
  con.confdeltype as deletion_action,
  con.confupdtype as update_action,
  rel.oid as source_id,
  nsp.nspname as source_schema,
  rel.relname as source_table,
  (
    SELECT
      array_agg(
        att.attname
        ORDER BY
          un.ord
      )
    FROM
      unnest(con.conkey) WITH ORDINALITY un (attnum, ord)
      INNER JOIN pg_attribute att ON att.attnum = un.attnum
    WHERE
      att.attrelid = rel.oid
  ) source_columns,
  frel.oid as target_id,
  fnsp.nspname as target_schema,
  frel.relname as target_table,
  (
    SELECT
      array_agg(
        att.attname
        ORDER BY
          un.ord
      )
    FROM
      unnest(con.confkey) WITH ORDINALITY un (attnum, ord)
      INNER JOIN pg_attribute att ON att.attnum = un.attnum
    WHERE
      att.attrelid = frel.oid
  ) target_columns
FROM
  pg_constraint con
  INNER JOIN pg_class rel ON rel.oid = con.conrelid
  INNER JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace
  INNER JOIN pg_class frel ON frel.oid = con.confrelid
  INNER JOIN pg_namespace fnsp ON fnsp.oid = frel.relnamespace
WHERE
  con.contype = 'f'
  AND nsp.nspname = ${s(e)}
`},"getRemoveForeignKeySQL",0,({table:e,foreignKeys:t})=>{let n=t.map(t=>_`ALTER TABLE IF EXISTS ${o(e.schema)}.${o(e.name)} DROP CONSTRAINT IF EXISTS ${o(t.name)}`);return _`${p(n,";\n")};`}],788035);let tI=_`ROLE_IMPERSONATION_NO_RESULTS`;e.s(["ROLE_IMPERSONATION_NO_RESULTS",0,tI,"ROLE_IMPERSONATION_SQL_LINE_COUNT",0,11,"getImpersonationSQL",0,({role:e,unexpiredClaims:t,sql:n})=>{var a;let r="postgrest"===e.type?void 0!==t?function({role:e,unexpiredClaims:t}){return _`
select set_config('role', ${s(e)}, true),
set_config('request.jwt.claims', ${s(JSON.stringify(t))}, true),
set_config('request.method', 'POST', true),
set_config('request.path', '/impersonation-example-request-path', true),
set_config('request.headers', '{"accept": "*/*"}', true);
  `}({role:e.role,unexpiredClaims:t}):_``:(a=e.role,_`
    set local role ${s(a)};
  `);return _`
    ${r}

    -- If the users sql returns no rows, pg-meta will
    -- fallback to returning the result of the impersonation sql.
    select 1 as "${tI}";

    ${n}
  `}],389273),e.s(["default",0,{roles:{list:function({includeDefaultRoles:e=!1,limit:t,offset:n}={}){let a=_`
with
  roles as (${eN})
select
  *
from
  roles
where
  true
`;return e||(a=_`${a} and not pg_catalog.starts_with(name, 'pg_')`),t&&(a=_`${a} limit ${s(t)}`),n&&(a=_`${a} offset ${s(n)}`),{sql:a,zod:ev}},retrieve:function(e){return{sql:_`with roles as (${eN}) select * from roles where ${eS(e)};`,zod:eT}},create:function({name:e,isSuperuser:t=!1,canCreateDb:n=!1,canCreateRole:a=!1,inheritRole:r=!0,canLogin:i=!1,isReplicationRole:l=!1,canBypassRls:c=!1,connectionLimit:d=-1,password:m,validUntil:u,memberOf:E=[],members:g=[],admins:f=[],config:h={}}){return{sql:_`
create role ${o(e)}
  ${t?_`superuser`:_``}
  ${n?_`createdb`:_``}
  ${a?_`createrole`:_``}
  ${r?_``:_`noinherit`}
  ${i?_`login`:_``}
  ${l?_`replication`:_``}
  ${c?_`bypassrls`:_``}
  connection limit ${s(d)}
  ${void 0===m?_``:_`password ${s(m)}`}
  ${void 0===u?_``:_`valid until ${s(u)}`}
  ${0===E.length?_``:_`in role ${p(E.map(o),",")}`}
  ${0===g.length?_``:_`role ${p(g.map(o),",")}`}
  ${0===f.length?_``:_`admin ${p(f.map(o),",")}`}
  ;
${p(Object.entries(h).map(([t,n])=>_`alter role ${o(e)} set ${o(t)} = ${s(n)};`),"\n")}
`}},update:function(e,t){let{name:n,isSuperuser:a,canCreateDb:r,canCreateRole:i,inheritRole:o,canLogin:l,isReplicationRole:c,canBypassRls:d,connectionLimit:m,password:p,validUntil:u}=t;return{sql:_`
do $$
declare
  old record;
begin
  with roles as (${eN})
  select * into old from roles where ${eS(e)};
  if old is null then
    raise exception 'Cannot find role with id %', id;
  end if;

  execute format('alter role %I
    ${void 0===a?_``:a?_`superuser`:_`nosuperuser`}
    ${void 0===r?_``:r?_`createdb`:_`nocreatedb`}
    ${void 0===i?_``:i?_`createrole`:_`nocreaterole`}
    ${void 0===o?_``:o?_`inherit`:_`noinherit`}
    ${void 0===l?_``:l?_`login`:_`nologin`}
    ${void 0===c?_``:c?_`replication`:_`noreplication`}
    ${void 0===d?_``:d?_`bypassrls`:_`nobypassrls`}
    ${void 0===m?_``:_`connection limit ${s(m)}`}
    ${void 0===p?_``:_`password ${s(p)}`}
    ${void 0===u?_``:_`valid until %L`}
  ', old.name${void 0===u?_``:_`, ${s(u)}`});

  ${void 0===n?_``:_`
  -- Using the same name in the rename clause gives an error, so only do it if the new name is different.
  if ${s(n)} != old.name then
    execute format('alter role %I rename to %I;', old.name, ${s(n)});
  end if;
  `}
end
$$;
`}},remove:function(e,{ifExists:t=!1}={}){return{sql:_`
do $$
declare
  old record;
begin
  with roles as (${eN})
  select * into old from roles where ${eS(e)};
  if old is null then
    raise exception 'Cannot find role with id %', id;
  end if;

  execute format('drop role ${t?_`if exists`:_``} %I;', old.name);
end
$$;
`}},zod:e$},columns:{list:function({tableId:e,includeSystemSchemas:t=!1,includedSchemas:n,excludedSchemas:a,limit:r,offset:i}={}){let o=_`
with
  columns as (${I})
select
  *
from
  columns
where
 true
`,l=g(n,a,t?void 0:u.DEFAULT_SYSTEM_SCHEMAS);return l&&(o=_`${o} and schema ${l}`),void 0!==e&&(o=_`${o} and table_id = ${s(e)} `),r&&(o=_`${o} limit ${s(r)}`),i&&(o=_`${o} offset ${s(i)}`),{sql:o,zod:y}},retrieve:function(e){return{sql:_`WITH columns AS (${I}) SELECT * FROM columns WHERE ${function(e){if("id"in e&&e.id)return _`${o("id")} = ${s(e.id)}`;if("name"in e&&e.name&&e.schema&&e.table)return _`schema = ${s(e.schema)} AND ${o("table")} = ${s(e.table)} AND name = ${s(e.name)}`;throw Error("Must provide either id or schema, name and table")}(e)};`,zod:O}},create:function({schema:e,table:t,name:n,type:a,is_identity:r=!1,identity_generation:i="BY DEFAULT",is_nullable:l,is_primary_key:d=!1,is_unique:p=!1,comment:u,check:E,no_transaction:g=!1,...f}){let h=_``;if(r){if(void 0!==f.default_value)throw Error("Columns cannot both be identity and have a default value");h=_`GENERATED ${c(i)} AS IDENTITY`}else void 0===f.default_value||(h=null===f.default_value?_`DEFAULT ${s(null)}`:"expression"===f.default_value_format?_`DEFAULT ${f.default_value}`:_`DEFAULT ${s(f.default_value)}`);let b=void 0===l?_``:l?_`NULL`:_`NOT NULL`,N=d?_`PRIMARY KEY`:_``,$=p?_`UNIQUE`:_``,v=void 0===E?_``:_`CHECK (${m(E)})`,T=void 0===u?_``:_`COMMENT ON COLUMN ${o(e)}.${o(t)}.${o(n)} IS ${s(u)}`,S=_`
  ALTER TABLE ${o(e)}.${o(t)} ADD COLUMN ${o(n)} ${R(a)}
    ${h}
    ${b}
    ${N}
    ${$}
    ${v};
  ${T};`;return g?{sql:S}:{sql:_`
  BEGIN;
    ${S};
  COMMIT;`}},update:function(e,{name:t,type:n,drop_default:a=!1,default_value:r,default_value_format:i="literal",is_identity:l,identity_generation:d="BY DEFAULT",is_nullable:m,is_unique:p,comment:u,check:E}){let g,f,h,b=void 0===t||t===e.name?_``:_`ALTER TABLE ${o(e.schema)}.${o(e.table)} RENAME COLUMN ${o(e.name)} TO ${o(t)};`,N=void 0===n?_``:_`ALTER TABLE ${o(e.schema)}.${o(e.table)} ALTER COLUMN ${o(e.name)} SET DATA TYPE ${R(n)} USING ${o(e.name)}::${R(n)};`;if(a)g=_`ALTER TABLE ${o(e.schema)}.${o(e.table)} ALTER COLUMN ${o(e.name)} DROP DEFAULT;`;else if(void 0===r)g=_``;else{let t=null===r?s(null):"expression"===i?r:s(r);g=_`ALTER TABLE ${o(e.schema)}.${o(e.table)} ALTER COLUMN ${o(e.name)} SET DEFAULT ${t};`}let $=_`ALTER TABLE ${o(e.schema)}.${o(e.table)} ALTER COLUMN ${o(e.name)}`;f=!1===l?_`${$} DROP IDENTITY IF EXISTS;`:!0===e.is_identity?void 0===d?_``:_`${$} SET GENERATED ${c(d)};`:void 0===l?_``:_`${$} ADD GENERATED ${c(d)} AS IDENTITY;`,h=void 0===m?_``:m?_`ALTER TABLE ${o(e.schema)}.${o(e.table)} ALTER COLUMN ${o(e.name)} DROP NOT NULL;`:_`ALTER TABLE ${o(e.schema)}.${o(e.table)} ALTER COLUMN ${o(e.name)} SET NOT NULL;`;let v=_``;!0===e.is_unique&&!1===p?v=_`
DO $$
DECLARE
  r record;
BEGIN
  FOR r IN
    SELECT conname FROM pg_constraint WHERE
      contype = 'u'
      AND cardinality(conkey) = 1
      AND conrelid = ${s(e.table_id)}
      AND conkey[1] = ${s(e.ordinal_position)}
  LOOP
    EXECUTE ${s(`ALTER TABLE ${o(e.schema)}.${o(e.table)} DROP CONSTRAINT `)} || quote_ident(r.conname);
  END LOOP;
END
$$;`:!1===e.is_unique&&!0===p&&(v=_`ALTER TABLE ${o(e.schema)}.${o(e.table)} ADD UNIQUE (${o(e.name)});`);let T=void 0===u?_``:_`COMMENT ON COLUMN ${o(e.schema)}.${o(e.table)}.${o(e.name)} IS ${s(u)};`,S=_``;if(void 0!==E){let t=null!==E?_`
  ALTER TABLE ${o(e.schema)}.${o(e.table)} ADD CONSTRAINT ${o(`${e.table}_${e.name}_check`)} CHECK (${E});

  SELECT conkey into v_conkey FROM pg_constraint WHERE conname = ${s(`${e.table}_${e.name}_check`)};

  ASSERT v_conkey IS NOT NULL, 'error creating column constraint: check condition must refer to this column';
  ASSERT cardinality(v_conkey) = 1, 'error creating column constraint: check condition cannot refer to multiple columns';
  ASSERT v_conkey[1] = ${s(e.ordinal_position)}, 'error creating column constraint: check condition cannot refer to other columns';`:_``;S=_`
DO $$
DECLARE
  v_conname name;
  v_conkey int2[];
BEGIN
  SELECT conname into v_conname FROM pg_constraint WHERE
    contype = 'c'
    AND cardinality(conkey) = 1
    AND conrelid = ${s(e.table_id)}
    AND conkey[1] = ${s(e.ordinal_position)}
    ORDER BY oid asc
    LIMIT 1;

  IF v_conname IS NOT NULL THEN
    EXECUTE format('ALTER TABLE ${o(e.schema)}.${o(e.table)} DROP CONSTRAINT %I', v_conname);
  END IF;
  ${t}
END
$$;`}return{sql:_`
BEGIN;
  ${h}
  ${N}
  ${g}
  ${f}
  ${v}
  ${T}
  ${S}
  ${b}
COMMIT;`}},remove:function(e,{cascade:t=!1}={}){return{sql:_`ALTER TABLE ${o(e.schema)}.${o(e.table)} DROP COLUMN ${o(e.name)} ${t?_`CASCADE`:_`RESTRICT`};`}},zod:A},schemas:{list:function({includeSystemSchemas:e=!1,limit:t,offset:n}={}){let a=eI;return e||(a=_`${a} and not (n.nspname in (${p(u.DEFAULT_SYSTEM_SCHEMAS.map(s),",")}))`),t&&(a=_`${a} limit ${s(t)}`),n&&(a=_`${a} offset ${s(n)}`),{sql:a,zod:ey}},retrieve:function({id:e,name:t}){return e?{sql:_`${eI} and n.oid = ${s(e)};`,zod:eO}:{sql:_`${eI} and n.nspname = ${s(t)};`,zod:eO}},create:function({name:e,owner:t}){return{sql:_`create schema ${o(e)}
  ${void 0===t?_``:_`authorization ${o(t)}`};
`}},update:function({id:e,name:t},{name:n,owner:a}){return{sql:_`
do $$
declare
  id oid := ${void 0===e?_`${s(t)}::regnamespace`:s(e)};
  old record;
  new_name text := ${void 0===n?s(null):s(n)};
  new_owner text := ${void 0===a?s(null):s(a)};
begin
  select * into old from pg_namespace where oid = id;
  if old is null then
    raise exception 'Cannot find schema with id %', id;
  end if;

  if new_owner is not null then
    execute format('alter schema %I owner to %I;', old.nspname, new_owner);
  end if;

  -- Using the same name in the rename clause gives an error, so only do it if the new name is different.
  if new_name is not null and new_name != old.nspname then
    execute format('alter schema %I rename to %I;', old.nspname, new_name);
  end if;
end
$$;
`}},remove:function({id:e,name:t},{cascade:n=!1}={}){return{sql:_`
do $$
declare
  id oid := ${void 0===e?_`${s(t)}::regnamespace`:s(e)};
  old record;
  cascade bool := ${s(n)};
begin
  select * into old from pg_namespace where oid = id;
  if old is null then
    raise exception 'Cannot find schema with id %', id;
  end if;

  if cascade then
    execute format('drop schema %I cascade;', old.nspname);
  else
    execute format('drop schema %I restrict;', old.nspname);
  end if;
end
$$;
`}},zod:eA},tables:eM,functions:Z,tablePrivileges:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:n,limit:a,offset:r}={}){let i=g(t,n,e?void 0:u.DEFAULT_SYSTEM_SCHEMAS),o=eR(i?_`and nc.nspname ${i}`:void 0),l=_`
with table_privileges as (${o})
select *
from table_privileges
`;return a&&(l=_`${l} limit ${s(a)}`),r&&(l=_`${l} offset ${s(r)}`),{sql:l,zod:ew}},retrieve:function({id:e,name:t,schema:n="public"}){let a=e?_`and c.oid = ${s(e)}`:_`and nc.nspname = ${s(n)} and c.relname = ${s(t)}`;return{sql:_`
with table_privileges as (${eR(a)})
select *
from table_privileges
`,zod:eC}},grant:function(e){return{sql:_`
do $$
begin
${p(e.map(({privilegeType:e,relationId:t,grantee:n,isGrantable:a})=>_`execute format(${s(`grant ${c(e)} on table %I.%I to ${ez(n)}${a?" with grant option":""}`)}, ${eD(t)});`),"\n")}
end $$;
`}},revoke:function(e){return{sql:_`
do $$
begin
${p(e.map(({privilegeType:e,relationId:t,grantee:n})=>_`execute format(${s(`revoke ${c(e)} on table %I.%I from ${ez(n)}`)}, ${eD(t)});`),"\n")}
end $$;
`}},zod:eL},publications:{list:function({limit:e,offset:t}={}){let n=_`with publications as (${ep}) select * from publications`;return e&&(n=_`${n} limit ${s(e)}`),t&&(n=_`${n} offset ${s(t)}`),{sql:n,zod:eg}},retrieve:function(e){return{sql:_`with publications as (${ep}) select * from publications where ${function(e){if("id"in e&&e.id)return _`${o("id")} = ${s(e.id)}`;if("name"in e&&e.name)return _`${o("name")} = ${s(e.name)}`;throw Error("Must provide either id or name")}(e)};`,zod:ef}},create:function({name:e,publish_insert:t=!1,publish_update:n=!1,publish_delete:a=!1,publish_truncate:r=!1,tables:i=null}){let l;l=null==i?_`FOR ALL TABLES`:0===i.length?_``:_`FOR TABLE ${p(i.map(e=>{if(!e.includes("."))return o(e);let[t,...n]=e.split("."),a=n.join(".");return _`${o(t)}.${o(a)}`}),",")}`;let c=[];return t&&c.push("insert"),n&&c.push("update"),a&&c.push("delete"),r&&c.push("truncate"),{sql:_`
CREATE PUBLICATION ${o(e)} ${l}
  WITH (publish = ${s(c.join(","))});`}},update:function(e,{name:t,owner:n,publish_insert:a,publish_update:r,publish_delete:i,publish_truncate:o,tables:l}){let c=void 0===l?"keep":null===l?"all":"list",d=(l??[]).map(eh);return{sql:_`
do $$
declare
  id oid := ${s(e)};
  old record;
  r record;
  i int;
  new_name text := ${void 0===t?s(null):s(t)};
  new_owner text := ${void 0===n?s(null):s(n)};
  new_publish_insert bool := ${s(a??null)};
  new_publish_update bool := ${s(r??null)};
  new_publish_delete bool := ${s(i??null)};
  new_publish_truncate bool := ${s(o??null)};
  tables_mode text := ${s(c)};
  new_table_schemas text[] := ${eb(d.map(e=>e.schema))};
  new_table_names text[] := ${eb(d.map(e=>e.name))};
begin
  select * into old from pg_publication where oid = id;
  if old is null then
    raise exception 'Cannot find publication with id %', id;
  end if;

  if tables_mode = 'keep' then
    null;
  elsif tables_mode = 'all' then
    if old.puballtables then
      null;
    else
      -- Need to recreate because going from list of tables <-> all tables with alter is not possible.
      execute format('drop publication %1$I; create publication %1$I for all tables;', old.pubname);
    end if;
  else
    if old.puballtables then
      -- Need to recreate because going from list of tables <-> all tables with alter is not possible.
      execute format('drop publication %1$I; create publication %1$I;', old.pubname);
    else
      for r in
        select n.nspname as schema_name, c.relname as table_name
        from pg_publication_rel pr
        join pg_class c on c.oid = pr.prrelid
        join pg_namespace n on n.oid = c.relnamespace
        where pr.prpubid = id
      loop
        execute format('alter publication %I drop table %I.%I', old.pubname, r.schema_name, r.table_name);
      end loop;
    end if;

    -- At this point the publication must have no tables.

    for i in 1 .. coalesce(cardinality(new_table_names), 0) loop
      if new_table_schemas[i] is null then
        execute format('alter publication %I add table %I', old.pubname, new_table_names[i]);
      else
        execute format('alter publication %I add table %I.%I', old.pubname, new_table_schemas[i], new_table_names[i]);
      end if;
    end loop;
  end if;

  execute format(
    'alter publication %I set (publish = %L);',
    old.pubname,
    concat_ws(
      ', ',
      case when coalesce(new_publish_insert, old.pubinsert) then 'insert' end,
      case when coalesce(new_publish_update, old.pubupdate) then 'update' end,
      case when coalesce(new_publish_delete, old.pubdelete) then 'delete' end,
      case when coalesce(new_publish_truncate, old.pubtruncate) then 'truncate' end
    )
  );

  execute format('alter publication %I owner to %I;', old.pubname, coalesce(new_owner, old.pubowner::regrole::name));

  -- Using the same name in the rename clause gives an error, so only do it if the new name is different.
  if new_name is not null and new_name != old.pubname then
    execute format('alter publication %I rename to %I;', old.pubname, coalesce(new_name, old.pubname));
  end if;

  -- We need to retrieve the publication later, so we need a way to uniquely identify which publication this is.
  -- We can't rely on id because it gets changed if it got recreated.
  -- We use a temp table to store the unique name - DO blocks can't return a value.
  create temp table pg_meta_publication_tmp (name) on commit drop as values (coalesce(new_name, old.pubname));
end $$;
`}},remove:function(e){return{sql:_`DROP PUBLICATION IF EXISTS ${o(e.name)};`}},zod:eE},extensions:U,config:{list:function({limit:e,offset:t}={}){let n=L;return e&&(n=_`${n} LIMIT ${s(e)}`),t&&(n=_`${n} OFFSET ${s(t)}`),{sql:n,zod:C}},zod:w},materializedViews:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:n,limit:a,offset:r,includeColumns:i=!0}={}){let o=el({includeColumns:i}),l=g(t,n,e?void 0:u.DEFAULT_SYSTEM_SCHEMAS);return l&&(o=_`${o} where schema ${l}`),a&&(o=_`${o} limit ${s(a)}`),r&&(o=_`${o} offset ${s(r)}`),{sql:o,zod:eo}},retrieve:function(e){let t=function(e){if("id"in e&&e.id)return _`${o("id")} = ${s(e.id)}`;if("name"in e&&e.name&&e.schema)return _`${o("name")} = ${s(e.name)} and ${o("schema")} = ${s(e.schema)}`;throw Error("Must provide either id or name and schema")}(e);return{sql:_`${el({includeColumns:!0})} where ${t};`,zod:es}},zod:ei},foreignTables:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:n,limit:a,offset:r,includeColumns:i=!0}={}){let o=j({includeColumns:i}),l=g(t,n,e?void 0:u.DEFAULT_SYSTEM_SCHEMAS);return l&&(o=_`${o} where schema ${l}`),a&&(o=_`${o} limit ${s(a)}`),r&&(o=_`${o} offset ${s(r)}`),{sql:o,zod:q}},retrieve:function(e){return{sql:_`${j({includeColumns:!0})} where ${function(e){if("id"in e&&e.id)return _`${o("id")} = ${s(e.id)}`;if("name"in e&&e.name&&e.schema)return _`${o("name")} = ${s(e.name)} and ${o("schema")} = ${s(e.schema)}`;throw Error("Must provide either id or name and schema")}(e)};`,zod:M}},zod:k},views:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:n,limit:a,offset:r,includeColumns:i=!0}={}){let o=e2({includeColumns:i}),l=g(t,n,e?void 0:u.DEFAULT_SYSTEM_SCHEMAS);return l&&(o=_`${o} where schema ${l}`),a&&(o=_`${o} limit ${s(a)}`),r&&(o=_`${o} offset ${s(r)}`),{sql:o,zod:e0}},retrieve:function(e){let t=function(e){if("id"in e&&e.id)return _`${o("id")} = ${s(e.id)}`;if("name"in e&&e.name&&e.schema)return _`${o("name")} = ${s(e.name)} and ${o("schema")} = ${s(e.schema)}`;throw Error("Must provide either id or name and schema")}(e);return{sql:_`${e2({includeColumns:!0})} where ${t};`,zod:e1}},zod:eZ},policies:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:n,limit:a,offset:r}={}){let i=_`
    with policies as (${ec})
    select *
    from policies
    `,o=g(t,n,e?void 0:u.DEFAULT_SYSTEM_SCHEMAS);return o&&(i=_`${i}where schema ${o}`),a&&(i=_`${i} limit ${s(a)}`),r&&(i=_`${i} offset ${s(r)}`),{sql:i,zod:e_}},retrieve:function(e){return{sql:_`with policies as (${ec}) select * from policies where ${function(e){if("id"in e&&e.id)return _`id = ${s(e.id)}`;if("name"in e&&e.name&&e.schema&&e.table)return _`name = ${s(e.name)} AND schema = ${s(e.schema)} AND table = ${s(e.table)}`;throw Error("Must provide either id or name, schema and table")}(e)};`,zod:em}},create:function({name:e,schema:t="public",table:n,definition:a,check:r,action:i="PERMISSIVE",command:s="ALL",roles:l=["public"]}){let d=p(l.map(o),", "),m=a?_`using (${a})`:_``,u=r?_`with check (${r})`:_``;return{sql:_`
create policy ${o(e)} on ${o(t)}.${o(n)}
  as ${c(i)}
  for ${c(s)}
  to ${d}
  ${m}
  ${u};`}},update:function(e,t){let{name:n,definition:a,check:r,roles:i}=t,s=_`ALTER POLICY ${o(e.name)} ON ${o(e.schema)}.${o(e.table)}`,l=void 0===n?_``:_`${s} RENAME TO ${o(n)};`,c=void 0===a?_``:_`${s} USING (${a});`,d=void 0===r?_``:_`${s} WITH CHECK (${r});`,m=void 0===i?_``:_`${s} TO ${p(i.map(o),", ")};`;return{sql:_`BEGIN; ${c} ${d} ${m} ${l} COMMIT;`}},remove:function(e){return{sql:_`DROP POLICY ${o(e.name)} ON ${o(e.schema)}.${o(e.table)};`}},zod:ed},triggers:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:n,limit:a,offset:r}={}){let i=_`with triggers as (${ej}) select * from triggers`,o=g(t,n,e?void 0:u.DEFAULT_SYSTEM_SCHEMAS);return o&&(i=_`${i} where schema ${o}`),a&&(i=_`${i} limit ${s(a)}`),r&&(i=_`${i} offset ${s(r)}`),{sql:i,zod:eW}},retrieve:function(e){let t=function(e){if("id"in e&&e.id)return _`${o("id")} = ${s(e.id)}`;if("name"in e&&e.name&&e.table&&e.schema)return _`${o("name")} = ${s(e.name)} and ${o("schema")} = ${s(e.schema)} and ${o("table")} = ${s(e.table)}`;throw Error("Must provide either id or name, schema and table")}(e);return{sql:_`with triggers as (${ej}) select * from triggers where ${t};`,zod:eY}},create:function({name:e,schema:t="public",table:a,function_schema:r="public",function_name:i,function_args:l=[],activation:d,events:m,orientation:u,condition:E}){let g=_`${o(t)}.${o(a)}`,f=_`${o(r)}.${o(i)}`,h=p(m.map(c)," or "),b=u?_`for each ${c(u)}`:_``,N=E?_`when (${E})`:_``,$=l.length>0?p(l.map(s),","):_``;return{sql:_`create trigger ${o(e)} ${c(d)} ${h} on ${g} ${b} ${N} execute function ${f}(${$});`,zod:n.z.void()}},update:function(e,t){let a=_`${o(e.schema)}.${o(e.table)}`,r=_``;switch(t.enabled_mode){case"ORIGIN":r=_`alter table ${a} enable trigger ${o(e.name)};`;break;case"DISABLED":r=_`alter table ${a} disable trigger ${o(e.name)};`;break;case"REPLICA":case"ALWAYS":r=_`alter table ${a} enable ${c(t.enabled_mode)} trigger ${o(e.name)};`}let i=t.name&&t.name!==e.name?_`alter trigger ${o(e.name)} on ${a} rename to ${o(t.name)};`:_``;return{sql:_`begin; ${r}; ${i}; commit;`,zod:n.z.void()}},remove:function(e,{cascade:t=!1}={}){let a=_`${o(e.schema)}.${o(e.table)}`;return{sql:_`drop trigger ${o(e.name)} on ${a} ${t?_`cascade`:_``};`,zod:n.z.void()}},zod:eP},types:eX,version:{retrieve:function(){return{sql:eV,zod:eQ}},zod:eQ},indexes:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:n,limit:a,offset:r}={}){let i=_`
    with indexes as (${ee})
    select *
    from indexes
  `,o=g(t,n,e?void 0:u.DEFAULT_SYSTEM_SCHEMAS);return o&&(i=_`${i} where schema ${o}`),a&&(i=_`${i} limit ${s(a)}`),r&&(i=_`${i} offset ${s(r)}`),{sql:i,zod:en}},retrieve:function({id:e}){return{sql:_`
    with indexes as (${ee})
    select *
    from indexes
    where id = ${s(e)};
  `,zod:ea}},zod:et},columnPrivileges:{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:n,columnIds:a,relationName:r,limit:i,offset:o}={}){let l=(({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:n,relationName:a,relationIds:r}={})=>{let i=[],o=g(t,n,e?void 0:u.DEFAULT_SYSTEM_SCHEMAS);o&&i.push(_`and nc.nspname ${o}`),a&&i.push(_`and c.relname = ${s(a)}`),r?.length&&i.push(_`and c.oid in (${p(r.map(s),",")})`);let l=p(i,"\n");return _`
with rel as (
  select
    c.oid,
    c.relname,
    c.relowner,
    c.relacl,
    nc.nspname
  from pg_class c
  join pg_namespace nc
    on nc.oid = c.relnamespace
  where c.relkind = any (array['r', 'v', 'm', 'f', 'p'])
    ${l}
),
roles as (
  select
    r.oid,
    r.rolname,
    pg_has_role(r.oid, 'USAGE') as is_member
  from pg_authid r
),
grantees as (
  select oid, rolname, is_member, false as is_public from roles
  union all
  select (0)::oid as oid, 'PUBLIC', false, true
),
priv as (
  -- Table-level ACLs apply to every live column of the relation.
  select
    a.attrelid,
    a.attnum,
    a.attname,
    r.relname,
    r.nspname,
    p.grantor,
    p.grantee,
    p.privilege_type as prtype,
    p.is_grantable as grantable
  from rel r
  cross join lateral aclexplode(coalesce(r.relacl, acldefault('r', r.relowner))) p
  join pg_attribute a
    on a.attrelid = r.oid
    and a.attnum > 0
    and not a.attisdropped
  where p.privilege_type = any (array['INSERT', 'SELECT', 'UPDATE', 'REFERENCES'])

  union

  -- Column-level ACLs.
  select
    a.attrelid,
    a.attnum,
    a.attname,
    r.relname,
    r.nspname,
    p.grantor,
    p.grantee,
    p.privilege_type,
    p.is_grantable
  from rel r
  join pg_attribute a
    on a.attrelid = r.oid
    and a.attnum > 0
    and not a.attisdropped
  cross join lateral aclexplode(coalesce(a.attacl, acldefault('c', r.relowner))) p
  where a.attacl is not null
    and p.privilege_type = any (array['INSERT', 'SELECT', 'UPDATE', 'REFERENCES'])
)
select
  (p.attrelid || '.' || p.attnum) as column_id,
  p.nspname as relation_schema,
  p.relname as relation_name,
  p.attname as column_name,
  coalesce(
    jsonb_agg(
      jsonb_build_object(
        'grantor', grantor.rolname,
        'grantee', grantee.rolname,
        'privilege_type', p.prtype,
        'is_grantable', p.grantable
      )
    ),
    '[]'
  ) as privileges
from priv p
join roles grantor
  on grantor.oid = p.grantor
join grantees grantee
  on grantee.oid = p.grantee
where grantor.is_member
   or grantee.is_member
   or grantee.is_public
group by
  p.attrelid,
  p.attnum,
  p.nspname,
  p.relname,
  p.attname
`})({includeSystemSchemas:e,includedSchemas:t,excludedSchemas:n,relationName:r,relationIds:a?.length?[...new Set(a.map(e=>e.split(".")[0]))]:void 0}),c=_`
  with column_privileges as (${l})
  select *
  from column_privileges
  `;return a?.length&&(c=_`${c} where column_id in (${p(a.map(s),",")})`),i&&(c=_`${c} limit ${s(i)}`),o&&(c=_`${c} offset ${s(o)}`),{sql:c,zod:N}},grant:function(e){return{sql:_`
do $$
declare
  col record;
begin
${p(e.map(({privilegeType:e,columnId:t,grantee:n,isGrantable:a})=>{let[r,i]=t.split(".");return _`
select *
from pg_attribute a
where a.attrelid = ${s(r)}
  and a.attnum = ${s(i)}
into col;
execute format(${s(`grant ${c(e)} (%I) on %I.%I to ${v(n)}${a?" with grant option":""}`)}, col.attname, ${$});`}),"\n")}
end $$;
`}},revoke:function(e){return{sql:_`
do $$
declare
  col record;
begin
${p(e.map(({privilegeType:e,columnId:t,grantee:n})=>{let[a,r]=t.split(".");return _`
select *
from pg_attribute a
where a.attrelid = ${s(a)}
  and a.attnum = ${s(r)}
into col;
execute format(${s(`revoke ${c(e)} (%I) on %I.%I from ${v(n)}`)}, col.attname, ${$});`}),"\n")}
end $$;
`}},zod:b},query:tl}],850036)}]);

//# debugId=a704300b-3925-7230-6c52-282c4e096239