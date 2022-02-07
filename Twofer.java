import static java.util.Optional.ofNullable;

public class Twofer {
    public String twofer(String name) {
        return String.format("One for %s, one for me.", ofNullable(name).orElse("you"));
    }
}
