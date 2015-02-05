Tinytest.add('famous - core', function (test) {
    test.instanceOf(famous.core.Context, Function);
    test.instanceOf(famous.core.ElementAllocator, Function);
    test.instanceOf(famous.core.Engine, Object);
    test.instanceOf(famous.core.Entity, Object);
    test.instanceOf(famous.core.EventEmitter, Function);
    test.instanceOf(famous.core.EventHandler, Function);
    test.instanceOf(famous.core.Group, Function);
    test.instanceOf(famous.core.Modifier, Function);
    test.instanceOf(famous.core.OptionsManager, Function);
    test.instanceOf(famous.core.RenderNode, Function);
    test.instanceOf(famous.core.Scene, Function);
    test.instanceOf(famous.core.SpecParser, Function);
    test.instanceOf(famous.core.Surface, Function);
    test.instanceOf(famous.core.Transform, Object);
    test.instanceOf(famous.core.View, Function);
    test.instanceOf(famous.core.ViewSequence, Function);
});