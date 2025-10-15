    import java.util.Set;
    import java.util.stream.Collectors;

    public class SetStreamExample {
        public static void main(String[] args) {
            Set<String> mySet = Set.of("apple", "banana", "cherry");
            String foundItem = mySet.stream()
                                    .filter(s -> s.equals("banana"))
                                    .findFirst()
                                    .orElse(null);
            System.out.println("Found item: " + foundItem);
        }
    }
