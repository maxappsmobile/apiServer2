const os = require("os");
const _ = require("underscore");
// Convert total memory to kb, mb and gb

let i = 0;
const systemInfo = _.throttle((total_memory = os.totalmem()) => {
  var total_mem_in_kb = total_memory / 1024;
  var total_mem_in_mb = total_mem_in_kb / 1024;
  var total_mem_in_gb = total_mem_in_mb / 1024;

  total_mem_in_kb = Math.floor(total_mem_in_kb);
  total_mem_in_mb = Math.floor(total_mem_in_mb);
  total_mem_in_gb = Math.floor(total_mem_in_gb);

  total_mem_in_mb = total_mem_in_mb % 1024;
  total_mem_in_kb = total_mem_in_kb % 1024;
  total_memory = total_memory % 1024;
  return {
    Total_memory_GB: total_mem_in_gb,
    total_mem_mb: total_mem_in_mb,
    total_mem_kb: total_mem_in_kb,
    total_memory_bytes: total_memory,
    i: i++,
  };
}, 4000);

module.exports = systemInfo;
