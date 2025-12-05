const test = require("node:test")
const assert = require("node:assert/strict")
const mailSender = require("../utils/mailSender")

test("mailSender sends email with injected transporter", async () => {
  const fakeInfo = { response: "250 OK" }
  let receivedPayload = null

  const transporter = {
    sendMail: async (payload) => {
      receivedPayload = payload
      return fakeInfo
    },
  }

  const result = await mailSender(
    "owner@tesla-clone.dev",
    "Welcome aboard",
    "<p>Thanks for joining Tesla Clone!</p>",
    { transporter }
  )

  assert.equal(result, fakeInfo)
  assert.ok(receivedPayload)
  assert.equal(receivedPayload.to, "owner@tesla-clone.dev")
  assert.equal(receivedPayload.subject, "Welcome aboard")
  assert.match(receivedPayload.html, /Tesla Clone/)
})

test("mailSender returns error message when transporter fails", async () => {
  const transporter = {
    sendMail: async () => {
      throw new Error("SMTP unavailable")
    },
  }

  const result = await mailSender(
    "owner@tesla-clone.dev",
    "Test failure",
    "<p>Should fail</p>",
    { transporter }
  )

  assert.equal(result, "SMTP unavailable")
})

