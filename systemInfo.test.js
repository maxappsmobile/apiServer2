const systemInfo = require("./systeminfo");

test("sysinfo test", () => {
  const result = systemInfo(17081237504);
  expect(result.Total_memory_GB).toBe(15);
});
