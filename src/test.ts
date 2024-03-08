import {
    AnimationEvent,
    ChangeEvent,
    ClipboardEvent,
    CompositionEvent, 
    EventHandler,
    FocusEvent,
    FormEvent,
    InvalidEvent,
    TransitionEvent,
    UIEvent,
} from "react";

// Expected: The above line should show the the @typescript-eslint/no-unused-vars error for all named imports.
// Actual: Only ChangeEvent, EventHandler, FormEvent and InvalidEvent generate errors.
