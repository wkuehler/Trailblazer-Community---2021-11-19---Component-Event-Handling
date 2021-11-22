({
  handleComponentEvent: function (component, event, helper) {
    var txttodisplay = event.getParam("messagetodisplay");
    console.log(txttodisplay);
    component.set("v.textmessage", txttodisplay);
    event.stopPropagation();
    console.log("v.textmessage");
  },

  fireComponentEvent: function (component, event, helper) {
    var compEvent = component.getEvent("EventTesting");
    compEvent.setParam("messagetodisplay", "event message here");
    compEvent.fire();
  }
});
