package valandur.webapi.serialize.view.misc;

import com.fasterxml.jackson.annotation.JsonValue;
import org.spongepowered.api.util.weighted.NestedTableEntry;
import org.spongepowered.api.util.weighted.RandomObjectTable;
import org.spongepowered.api.util.weighted.TableEntry;
import org.spongepowered.api.util.weighted.WeightedObject;
import valandur.webapi.api.serialize.BaseView;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

public class RandomObjectTableView extends BaseView<RandomObjectTable<Object>> {

    @JsonValue
    public Map<Double, Object> entries;


    public RandomObjectTableView(RandomObjectTable<Object> value) {
        super(value);

        entries = new HashMap<>();
        for (TableEntry entry : value.getEntries()) {
            if (entry instanceof NestedTableEntry) {
                try {
                    // Get the property with reflection because it's not exposed for some reason
                    Field field = NestedTableEntry.class.getDeclaredField("table");
                    field.setAccessible(true);
                    Object tbl = field.get(entry);
                    entries.put(entry.getWeight(), tbl);
                } catch (IllegalAccessException | NoSuchFieldException ignored) { }
            } else if (entry instanceof WeightedObject) {
                entries.put(entry.getWeight(), ((WeightedObject)entry).get());
            }
        }
    }
}
